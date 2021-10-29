package com.selectionretraite.api.controller;

import com.selectionretraite.api.configurations.TokenProvider;
import com.selectionretraite.api.entities.User;
import com.selectionretraite.api.entities.utils.LoginUser;
import com.selectionretraite.api.entities.utils.OAuthToken;
import com.selectionretraite.api.exceptions.SavingIdException;
import com.selectionretraite.api.services.IUserService;
import com.selectionretraite.api.services.implementation.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping( "api")
public class AuthenticationController {



    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "token", method = RequestMethod.POST)
    public ResponseEntity<?> registerUser (@RequestBody LoginUser loginUser) throws AuthenticationException {

    final Authentication authentication = authenticationManager
            .authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(),
                    loginUser.getPassword())
    );
        SecurityContextHolder.getContext().setAuthentication(authentication);
    final String token = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new OAuthToken(token));
    }

    @RestController
    @RequestMapping("api/users")
    public static class UserController {
        final IUserService userService;


        public UserController(IUserService userService) {
            this.userService = userService;
        }

        @GetMapping
        public ResponseEntity<?> findAll(){
            return ResponseEntity.ok(userService.findAll());
        }

        @PostMapping
        public ResponseEntity<?> save(@RequestBody User user){
            if(user.getId() == null){
                Optional<User> user1 = Optional.of(userService.save(user));
                return ResponseEntity.created(null).body(user1);
            } else {
                throw new SavingIdException(HttpStatus.BAD_REQUEST, "entity id must be null");
            }

        }

        @PutMapping
        public ResponseEntity<?> update(@RequestBody User user){
            if(user.getId() != null){
                User user1 = userService.save(user);
                return ResponseEntity.accepted().body(user1);
            } else {
                throw new SavingIdException(HttpStatus.BAD_REQUEST, "entity id cannot be null");
            }
        }

        @DeleteMapping("{id}")
        public ResponseEntity<?> delete(@PathVariable("id") Long id){
            userService.deleteById(id);
            return ResponseEntity.noContent().build();
        }


    }
}
