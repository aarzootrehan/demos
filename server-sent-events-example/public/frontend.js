if (!!window.EventSource) {
  const es = new EventSource("http://localhost:3000/timer");
  es.addEventListener("message", function (event) {
    console.log("Messsageee ", event);
    onMessageReceivedFromServer(event);

  });

  es.addEventListener("error", function (event) {
    console.log("ERRORRRR ", event);

    onErrorReceivedFromServer(event);
  });

  function onMessageReceivedFromServer(event) {
    // On message received;
    document.getElementById("result").innerHTML = event.data;
  }

  function onErrorReceivedFromServer(event) {
      console.log("Event reciveed is ", event)
    // On Error received
    switch (event.eventPhase) {
      case EventSource.OPEN:
        document.getElementById("result").innerHTML = "OPEN STATE ";

        break;
      case EventSource.CLOSED:
        document.getElementById("result").innerHTML = "CLOSED CONNECTION";
        break;
    }
  }
} else {
  document.getElementById("result").innerHTML =
    "Sorry, your browser does not supports server sent events";
}
