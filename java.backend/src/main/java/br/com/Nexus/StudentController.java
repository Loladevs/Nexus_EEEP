package br.com.nexus;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class StudentController {

    @GetMapping("/students")
    public List<Student> students() {

        return List.of(

            new Student(
                1L,
                "Ana Beatriz",
                "2º ano",
                "Tecnologia e Comunicação",
                82
            ),

            new Student(
                2L,
                "Lucas Mendes",
                "2º ano",
                "Administração",
                76
            ),

            new Student(
                3L,
                "Marina Alves",
                "3º ano",
                "Design",
                91
            )

        );
    }


    @GetMapping("/health")
    public String health() {

        return "Nexus API online";

    }

}