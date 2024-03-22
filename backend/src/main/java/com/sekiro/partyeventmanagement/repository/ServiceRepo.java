package com.sekiro.partyeventmanagement.repository;

import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepo extends JpaRepository<Services, Integer>{
    
}