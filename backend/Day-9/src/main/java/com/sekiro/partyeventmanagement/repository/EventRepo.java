package com.sekiro.partyeventmanagement.repository;

import org.springframework.stereotype.Repository;

import io.micrometer.observation.Observation.Event;

@Repository
public interface EventRepo extends JpaRepository<Event, Integer>{
    
}