package com.example.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
