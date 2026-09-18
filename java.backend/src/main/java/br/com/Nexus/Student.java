package br.com.nexus;

public record Student(

    Long id,

    String name,

    String year,

    String interest,

    int journeyProgress

) {}