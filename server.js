const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const notes = require('./db/db.json'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

app.get('/api/notes', (req, res) => { 
    res.json(notes);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => { 
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

function createNewNote(noteData, notesArray) { 
    const newNote = noteData;
    newNote.id = Date.now();
    notesArray.push(newNote); 
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'), 
        JSON.stringify(notesArray, null, 2)
    );
    return newNote; 
}

app.post('/api/notes', (req, res) => { 
    const newNote = createNewNote(req.body, notes);
    res.json(newNote); 
});

function deleteNote(id, notesArray) { 
    const updatedNotes = notesArray.filter((note) => note.id !== id);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'), 
        JSON.stringify(updatedNotes, null, 2)
    );
}

app.delete('/api/notes/:id', (req, res) => { 
    const noteIdToDelete = parseInt(req.params.id);
    deleteNote(noteIdToDelete, notes); 
    res.json({ success: true });
});

app.listen(PORT, () => { 
    console.log(`Server is now running on port ${PORT}!`); 
});