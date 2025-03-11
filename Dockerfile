FROM ubuntu:latest

# Instalar dependências básicas
RUN apt-get update && apt-get install -y git openssh-client

# Adicionar chave SSH (substituir pelo nome correto do ficheiro da tua chave privada)
COPY id_rsa /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa

# Configurar o script
COPY sync.sh /sync.sh
RUN chmod +x /sync.sh

# Definir o comando de arranque
CMD ["/sync.sh"]
