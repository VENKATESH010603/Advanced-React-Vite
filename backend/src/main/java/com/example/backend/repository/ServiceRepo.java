package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Services;

@Repository
public interface ServiceRepo extends JpaRepository<Services, Integer>{
    
}