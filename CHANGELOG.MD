# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

## [0.0.5] - 11-07-2020
### Added
- Добавлен **Redux**
- Добавлена ссылка на Github репозиторий в шапку
- Добавлен reducer/itemReducer
- Добавлены actions/itemActions.js
- Добавлены actions/types.js
- Добавлен store.js для Redux

### Changed
- Компонент TasksList теперь берет данные не из state, а из itemReducer

### Removed
- Отключена модель ветвления Gitflow

## [0.0.4] - 11-07-2020
### Added
- Подключена модель ветвления Gitflow

## [0.0.3.1] - 11-07-2020
### Added
- Добавлено логгирование запросов в консоль для **ENV=development**
- Комментарии в **CRUD** для route **tasks** стандартизированы
- Добавлен модуль concurrently
- В серверный **package.json** переписаны скрипты для запуска приложения
- Добавлен Fronend (client) - **React**
- В **React** добавлены **uuid**, **reactstrap**, **bootstrap** и **react-transition-group**
- Обновлен **App.js**
- Обновлена файловая структура в **React**
- Создан компонент **AppNavbar**
- Создан компонент **TasksList**

### Changed
- Обновлена файловая структура приложения

## [0.0.2] - 11-07-2020
### Added
- Инициализация проекта
- Подключены основные библиотеки
- Создан **config.js** с основными настройками окружения
- Создан **Restify** сервер
- Подключена **MongoDB** через модуль **Mongoose**
- Создана модель **Task**
- Создан route **tasks**
- Создан CRUD для модели **Task**