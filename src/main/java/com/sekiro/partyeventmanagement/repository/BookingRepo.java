package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.model.Bookings;

@Repository
public interface BookingRepo extends JpaRepository<Bookings, Integer>{
    
}
