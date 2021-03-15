FROM postgres:9.5.3
ENV POSTGRES_USER soon
ENV POSTGRES_PASSWORD dev
ENV POSTGRES_DB soon
ADD ./scripts/*.sql /docker-entrypoint-initdb.d/
RUN echo "America/Sao_Paulo" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata