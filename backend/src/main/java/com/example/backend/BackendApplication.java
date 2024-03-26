package com.example.backend;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class BackendApplication{

	
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	// 	@Autowired
	// VenueRepo repo;
	
	// 	@Override
	// 	public void run(String... args) throws Exception{
	// 		Venue venue=new Venue();
	// 		venue.setId(1);
	// 		venue.setAvail("yes");
	// 		venue.setDes("Hello");
	// 		venue.setLink("http://:localhost");
	// 		venue.setLocation("cbe");
	// 		venue.setName("tag");
	// 		venue.setPrice(100000);
			
	// 		repo.save(venue);
	// 	}
		

	}

	





