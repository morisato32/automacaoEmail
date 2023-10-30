


// Define the function to be executed
function openGoogle() {
    window.open('https://www.google.com', '_blank');
  }
  
  // Create a SpeechRecognition object
  const recognition = new window.webkitSpeechRecognition();
  
  // Set the language to the user's default language
  recognition.lang = window.navigator.language;
  
  // Add an event listener for the 'result' event
  recognition.addEventListener('result', (event) => {
    // Get the recognized text
    const transcript = event.results[0][0].transcript;
  
    // Define the commands and their corresponding functions
    const commands = {
      'abri email': openGoogle,
    };
  
    // Check if the recognized text matches a command
    if (transcript in commands) {
      // Call the corresponding function
      commands[transcript]();
    }
  });
  
  // Start the speech recognition
  recognition.start();
  