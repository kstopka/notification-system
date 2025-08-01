# Opis Projektu: System Powiadomień

## Wprowadzenie

System Powiadomień to zaawansowana aplikacja webowa, zbudowana w architekturze **full-stack**, która demonstruje kompleksowe podejście do tworzenia nowoczesnych rozwiązań internetowych. Projekt składa się z dwóch głównych komponentów: **backendu** opartego na **Node.js** i **Express** oraz **frontendu** zbudowanego przy użyciu **React** i **TypeScript**. Aplikacja została zaprojektowana z myślą o skalowalności, wydajności i bezpieczeństwie, a jej kod napisano z dbałością o czystość i modularność.

## Technologie

### Backend

- **Node.js** – środowisko uruchomieniowe, które pozwala na budowanie szybkich i skalowalnych aplikacji serwerowych w języku JavaScript.
- **Express** – minimalistyczny i elastyczny framework dla Node.js, który ułatwia tworzenie API i obsługę żądań HTTP.
- **MySQL** – system zarządzania relacyjną bazą danych, używany do przechowywania danych aplikacji.
- **jsonwebtoken (JWT)** – standard do bezpiecznego przesyłania informacji między stronami w formie tokenów, używany do autoryzacji użytkowników.
- **express-session** – middleware do zarządzania sesjami użytkowników.
- **cors** – middleware umożliwiający kontrolowanie dostępu do zasobów serwera z różnych domen.

### Frontend

- **React** – biblioteka JavaScript do budowania interfejsów użytkownika, która pozwala na tworzenie reużywalnych komponentów.
- **TypeScript** – nadzbiór języka JavaScript, który dodaje statyczne typowanie, zwiększając bezpieczeństwo i czytelność kodu.
- **React Router** – biblioteka do obsługi routingu po stronie klienta, umożliwiająca tworzenie aplikacji jednostronicowych (SPA).
- **Styled Components** – biblioteka do stylowania komponentów React, która pozwala na pisanie CSS wewnątrz plików JavaScript, co ułatwia zarządzanie stylami.
- **Axios** – biblioteka do wykonywania żądań HTTP z przeglądarki i Node.js, używana do komunikacji z API backendu.
- **React Hook Form** i **Yup** – zestaw narzędzi do zarządzania formularzami i walidacji danych, co zapewnia doskonałe doświadczenie użytkownika.
- **React Table** – biblioteka do tworzenia zaawansowanych i interaktywnych tabel.

## Architektura i Wzorce Projektowe

### Backend

Architektura backendu opiera się na **wzorcu warstwowym (Layered Architecture)**, co widać w wyraźnym podziale na:

- **Warstwę routingu (`routes`)** – odpowiedzialną za definiowanie ścieżek API i przyjmowanie żądań.
- **Warstwę logiki biznesowej (`endpoints`)** – zawierającą implementację wszystkich operacji na danych i logiki aplikacji.
- **Warstwę dostępu do danych (`config/db.js`)** – odpowiedzialną za komunikację z bazą danych.

Dodatkowo, w projekcie zaimplementowano:

- **Wzorzec Middleware** – do obsługi zadań pośrednich, takich jak autoryzacja za pomocą `checkToken`, co pozwala na separację tych mechanizmów od logiki biznesowej.
- **Programowanie obiektowe** – logika biznesowa została zamknięta w klasach, co ułatwia zarządzanie kodem i jego ponowne wykorzystanie.

### Frontend

Frontend został zbudowany w oparciu o architekturę **komponentową** oraz **Atomic Design**:

- **Atomic Design** – widoczny w podziale na `atomy` (np. `Button`, `Input`), które są podstawowymi elementami UI. Te atomy są następnie składane w większe `molekuły` i `organizmy`, co pozwala na tworzenie spójnego i reużywalnego interfejsu.
- **Custom Hooks** – logika biznesowa, taka jak pobieranie danych (`useTickets`) czy obsługa formularzy (`useLogin`), została wyodrębniona do osobnych `custom hooks`, co pozwala na jej ponowne wykorzystanie i oddzielenie od warstwy prezentacji.
- **Context API** – do zarządzania stanem globalnym aplikacji, co umożliwia współdzielenie danych między komponentami bez tzw. "prop-drilling".

## Kluczowe Funkcjonalności

- **System autoryzacji i uwierzytelniania** – oparty na tokenach JWT, z bezpiecznym logowaniem i ochroną tras.
- **Moduł aktualności** – zarządzanie postami (dodawanie, edycja, usuwanie).
- **System zgłoszeń (ticketing)** – tworzenie i zarządzanie zgłoszeniami serwisowymi, z możliwością przypisywania priorytetów i właścicieli.
- **System komentarzy** – dodawanie komentarzy do postów i zgłoszeń.
- **Moduł głosowań i ustaw** – funkcjonalności związane z głosowaniem nad projektami ustaw.
- **Panel administracyjny** – dedykowany interfejs dla administratorów do zarządzania systemem.
- **Dynamiczne tabele** – do prezentacji danych z możliwością sortowania i filtrowania.

# instrukcja do uruchomienia

## nazwa templatki

notification-system

## pobranie repo

git clone https://github.com/kstopka/notification-system

## do instalacji frontu

cd frontend
npm install

## do instalacji backendu

cd backend
npm install

## uruchomienie frontu

cd frontend
npm start

## uruchomienie backendu

cd backend
nodemon index.js

## uruchomienie bazy danych

bazę należy uruchomić lokalnie za pomocą programu xampp
