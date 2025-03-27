function GreetingMessage() {
    // Récupère l'heure actuelle
    const hour = new Date().getHours();
  
    // Détermine le message selon l'heure
    let greeting;
  
    if (hour < 12) {
      greeting = "🌞 Good morning!";
    } else if (hour < 18) {
      greeting = "☀️ Good afternoon!";
    } else {
      greeting = "🌙 Good evening!";
    }
  
    return (
      <p className="text-xl font-semibold text-center text-blue-600">
        {greeting}
      </p>
    );
  }
  
  export default GreetingMessage;
  