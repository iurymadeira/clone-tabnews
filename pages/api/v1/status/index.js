function status(request, reponse) {
  reponse.status(200).json({ chave: "testando response" });
}

export default status;
