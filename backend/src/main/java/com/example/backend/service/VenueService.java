package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Venue;
import com.example.backend.repository.VenueRepo;

@Service
public class VenueService {
    @Autowired
    VenueRepo repo;

    public boolean addVenue(Venue venue) {
		repo.save(venue);

		return true;
	}

    public List<Venue> getAllVenues(){
        System.out.println("List of all venues");
        return repo.findAll();
        
    }

    public Optional<Venue> getVenueById(int id){
        return repo.findById(id);
    }

    public boolean deleteById(int id){
        repo.deleteById(id);
        return true;
    }

    public Venue updateVenue(Venue venue, int id) {
		Venue model=repo.findById(id).get();
		model.setVid(venue.getVid());
		model.setDes(venue.getDes());
		model.setAvail(venue.getAvail());
		model.setLink(venue.getLink());
		model.setName(venue.getName());
		model.setPrice(venue.getPrice());
		
		repo.save(model);
		return model;
	};
}
