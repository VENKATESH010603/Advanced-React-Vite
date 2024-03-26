package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Services;
import com.example.backend.repository.ServiceRepo;

@Service
public class ServicesService {

    @Autowired
    ServiceRepo repo;

    public boolean postService(Services service){
        repo.save(service);
        return true;
    }

    public List<Services> getAllServices(){
        return repo.findAll();
    }

    public Optional<Services> getServiceById(int id){
        return repo.findById(id);
    }

    public boolean deleteById(int id){
        repo.deleteById(id);
        return true;
    }

    
}
