package com.skilldistillery.wine.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class WineTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Wine wine;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("WinePU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		wine = em.find(Wine.class, 1);
		
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		wine = null;
	}

	@Test
	@DisplayName("test Entity mapping")
	void test1() {
		assertNotNull(wine);
		assertEquals("American Riesling", wine.getName());
	}

}
