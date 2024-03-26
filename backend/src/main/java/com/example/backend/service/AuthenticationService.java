package com.example.backend.service;

import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import com.example.backend.dto.request.AuthenticationRequest;
import com.example.backend.dto.request.RegisterRequest;
import com.example.backend.dto.response.AuthenticationResponse;
import com.example.backend.dto.response.RegisterResponse;
import com.example.backend.model.Role;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public RegisterResponse register(RegisterRequest request) {
        var user = User
                .builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .mobile(request.getMobile())
                .role(Role.USER)
                .build();
        userRepository.save(user);
        // var jwtToken = jwtService.generateToken(user);
        return RegisterResponse.builder()
                .message("User Registered Successfully")
                // .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
        .message("User authenticated Successfully")
                .token(jwtToken)
                .build();
    }

	public List<User> getData() {
		return userRepository.findAll();
	}

        public boolean deleteUser(long id){
                userRepository.deleteById(id);
                return true;
        }

}
