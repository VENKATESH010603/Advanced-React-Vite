package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Services;
import com.example.backend.service.ServicesService;

@CrossOrigin("*")
@RequestMapping("api/v1/auth/admin/services")
@RestController
public class ServicesController {
    @Autowired
    ServicesService service;
    
    @PostMapping("")
    public boolean addService(@RequestBody Services services){
        return service.postService(services);
    }

    @GetMapping("")
    public List<Services> getAllServices() {
        return service.getAllServices();
    }

    @GetMapping("/{id}")
    public Optional<Services> getEventById(@PathVariable int id) {
        return service.getServiceById(id);
    }

    @DeleteMapping("/{id}")
    public boolean deleteById(@PathVariable int id){
        return service.deleteById(id);
    }
}
