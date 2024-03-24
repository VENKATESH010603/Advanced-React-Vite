package com.sekiro.partyeventmanagement.repository;

import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepo extends JpaRepository<Bookings, Integer>{
    
}
