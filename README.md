# Note Taker Challenge
![SS](https://github.com/JadenMerzetti/Un-ottimo-lato/assets/131717483/832bd684-d1fc-45f4-8333-a5b86cdd260e)

## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Description

The Note Taker Challenge is a web application that allows users to create, view, and delete notes. It provides a user-friendly interface for managing and organizing notes, making it a useful tool for keeping track of important information.

This project was developed as part of a coding challenge to demonstrate proficiency in building web applications using technologies like Node.js, Express.js, and JSON data storage.

---

## Installation

To run the Note Taker Challenge locally on your machine, follow these steps:

1. Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/yourusername/note-taker-challenge.git

   ## Usage

- **Creating a New Note**:
  - Click the "New Note" button to create a new note.
  - Enter a title and the text of your note in the provided input fields.
  - Click the "Save" icon to save the note.

- **Viewing/Editing an Existing Note**:
  - To view or edit an existing note, navigate to the list of notes on the left side of the application.
  - Click on the note you want to view or edit. The note's title and text will appear in the input fields for editing.
  - You can make changes to the note and then click the "Save" icon to update it.

- **Deleting a Note**:
  - To delete a note, locate the note in the list on the left side of the application.
  - Click the trash can icon (delete) next to the note you want to remove.
  - Confirm the deletion when prompted.

## API Endpoints

The Note Taker Challenge includes the following API endpoints:

- **GET `/api/notes`**:
  - Use this endpoint to retrieve a list of all existing notes.
  - When you access this endpoint, you will receive a JSON response containing the list of notes.

- **POST `/api/notes`**:
  - Use this endpoint to create a new note.
  - Send a POST request to this endpoint with the note data in JSON format.
  - The server will save the new note, assign it a unique ID, and return the created note in the response.

- **DELETE `/api/notes/:id`**:
  - Use this endpoint to delete a specific note by its ID.
  - Send a DELETE request to this endpoint with the ID of the note you want to delete.
  - The server will remove the note with the specified ID, and a successful response will be returned.


