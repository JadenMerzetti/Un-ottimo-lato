const NEW_PORT = process.env.NEW_PORT || 3001; 
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const allNewNotes = require('./db/db.json'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/new_notes', (req, res) => { 
    res.json(allNewNotes.slice(1)); 
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/new_notes', (req, res) => { 
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

function createNewNewNote(body, newNotesArray) { 
    const newNewNote = body; 
    if (!Array.isArray(newNotesArray))
        newNotesArray = [];
    
    if (newNotesArray.length === 0)
        newNotesArray.push(0);

    body.id = newNotesArray[0];
    newNotesArray[0]++;

    newNotesArray.push(newNewNote); 
    fs.writeFileSync(
        path.join(__dirname, './db/new_db.json'), 
        JSON.stringify(newNotesArray, null, 2)
    );
    return newNewNote; 
}

app.post('/api/new_notes', (req, res) => { 
    const newNewNote = createNewNewNote(req.body, allNewNotes);
    res.json(newNewNote); 
});

function deleteNewNote(id, newNotesArray) { 
    for (let i = 0; i < newNotesArray.length; i++) {
        let note = newNotesArray[i];

        if (note.id == id) {
            newNotesArray.splice(i, 1);

            fs.writeFileSync(
                path.join(__dirname, './db/new_db.json'), 
                JSON.stringify(newNotesArray, null, 2)
            );

            break;
        }
    }
}

app.delete('/api/new_notes/:id', (req, res) => { 
    deleteNewNote(req.params.id, allNewNotes); 
    res.json(true);
});

app.listen(NEW_PORT, () => { 
    console.log(`API server now on port ${NEW_PORT}!`); 
});
