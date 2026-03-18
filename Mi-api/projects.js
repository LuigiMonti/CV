const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let experiences = [
  {
    id: 1,
    company: '',
    role: '',
    startDate: '',
    endDate: null,
    description: '',
    tech: [],
    highlights: []
  },
  {
    id: 2,
    company: 'Mi API Express',
    role: 'Backend Developer',
    startDate: '2024-01',
    endDate: null,
    description: 'API REST construida con Express para manejo de usuarios y autenticación.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    highlights: [
      'Implementación de autenticación JWT',
      'Arquitectura RESTful',
      'Manejo de errores centralizado'
    ]
  },
  {
    id: 3,
    company: 'Portfolio Web',
    role: 'Frontend Developer',
    startDate: '2023-06',
    endDate: '2023-09',
    description: 'Sitio web personal para mostrar proyectos y habilidades.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Diseño responsive',
      'Optimización SEO básica',
      'Deploy en hosting público'
    ]
  }
];

let nextId = 4;

// GET / - Bienvenida
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a la API de Proyectos' });
});

// GET /experiences - Ver todos los proyectos
app.get('/experiences', (req, res) => {
    res.json(experiences); 
});

// GET /projects/:id - Ver un proyecto específico
app.get('/projects/:id', (req, res) => {
    const project = experiences.find(p => p.id === parseInt(req.params.id));

    if (!project) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    res.json(project);
});

// POST /projects - Crear un proyecto
app.post('/projects', (req, res) => {
    const { company, role, startDate, endDate, description, tech, } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'El campo "name" es requerido' });
    }

    const newProject = {
        id: nextId++,
        name,
        stars: stars || 0,
    };

    projects.push(newProject);
    res.status(201).json(newProject);
});

// PATCH /projects/:id - Actualizar un proyecto
app.patch('/projects/:id', (req, res) => {
    const index = projects.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    projects[index] = { ...projects[index], ...req.body };
    res.json(projects[index]);
});

// DELETE /projects/:id - Eliminar un proyecto
app.delete('/projects/:id', (req, res) => {
    const index = projects.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    const deleted = projects.splice(index, 1);
    res.json({ message: 'Proyecto eliminado', project: deleted[0] });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});