package com.sekiro.partyeventmanagement.repository;



import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

@Repository
public interface VenueRepo extends JpaRepository<Venue, Integer>{

    void save(Venue venue);

    List<Venue> findAll();

    Optional<Venue> findById(int id);

    void deleteById(int id);
    
}
