FROM fedora

RUN sudo dnf update

RUN sudo dnf install python3

RUN python3 --version

WORKDIR /usr/app

RUN python3 --version

COPY ./ /usr/app

CMD [ "which"," python3" ]