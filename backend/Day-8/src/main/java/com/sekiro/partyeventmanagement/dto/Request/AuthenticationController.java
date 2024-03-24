
package com.sekiro.partyeventmanagement.dto.Request;


import java.util.List;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.User;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final Authentication authenticationService;

    @PostMapping("/register")
    public ResponseEntity<RegisterRequest> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<Authentication> authenticate(@RequestBody Authentication request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
    
    @GetMapping("/details")
    public List<User> getData(){
    	return authenticationService.getData();
    }

    @DeleteMapping("/user/{id}")
    public boolean deleteById(@PathVariable long id){
        return authenticationService.deleteUser(id);
    }
    
}