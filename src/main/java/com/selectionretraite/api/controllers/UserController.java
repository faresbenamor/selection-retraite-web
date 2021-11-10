package com.selectionretraite.api.controllers;


import com.selectionretraite.api.entities.User;
import com.selectionretraite.api.exceptions.SavingIdException;
import com.selectionretraite.api.services.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@RestController
@RequestMapping("api/users")
@CrossOrigin("*")
public class UserController {
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
