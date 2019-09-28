package com.skilldistillery.wine.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Wine {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	private String name;
	@Column(name="winery_name")
	private String wineryName;
	private int year;
	private String type;
	private String color;
	private int rating;
	@Column(name="tasting_notes")
	private String tastingNotes;
	
	
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

	public String getWineryName() {
		return wineryName;
	}

	public void setWineryName(String wineryName) {
		this.wineryName = wineryName;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getTastingNotes() {
		return tastingNotes;
	}

	public void setTastingNotes(String tastingNotes) {
		this.tastingNotes = tastingNotes;
	}

	public Wine() {}

	public Wine(int id) {
		super();
		this.id = id;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Wine [id=").append(id).append(", name=").append(name).append(", wineryName=").append(wineryName)
				.append(", year=").append(year).append(", type=").append(type).append(", color=").append(color)
				.append(", rating=").append(rating).append(", tastingNotes=").append(tastingNotes).append("]");
		return builder.toString();
	}
	
	
}
