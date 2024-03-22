package com.example.backend.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.model.Venue;

@Repository
public interface VenueRepo extends JpaRepository<Venue, Integer>{
    
}
