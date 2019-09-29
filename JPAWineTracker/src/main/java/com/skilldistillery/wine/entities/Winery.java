package com.skilldistillery.wine.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Winery {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String city;
	private String link;
	
	@JsonIgnore
	@OneToMany(mappedBy = "winery")
	private List<Wine> wines;
	
	public Winery() {}
	
	public Winery(int id, String name, String city, String link) {
		super();
		this.id = id;
		this.name = name;
		this.city = city;
		this.link = link;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public List<Wine> getWines() {
		return wines;
	}

	public void setWines(List<Wine> wines) {
		this.wines = wines;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Winery [id=").append(id).append(", name=").append(name).append(", city=").append(city)
				.append(", link=").append(link).append("]");
		return builder.toString();
	}

	
	

}
