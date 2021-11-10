package com.selectionretraite.api.controllers;

import com.selectionretraite.api.configurations.TokenProvider;
import com.selectionretraite.api.entities.User;
import com.selectionretraite.api.utils.LoginUser;
import com.selectionretraite.api.utils.OAuthToken;
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
@CrossOrigin("*")
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


}
