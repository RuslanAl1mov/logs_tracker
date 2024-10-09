# Логи событий веб-приложение

Это простое веб-приложение для отображения логов событий, которые трекает созданное приложение. Интерфейс позволяет пользователям просматривать логи и загружать скриншоты.

## Структура проекта

- **Frontend**: Веб-клиент, написанный на React.
- **Backend**: API, реализованное на Django.

## Установка

### 1. Клонирование репозитория

Сначала клонируйте репозиторий на ваш локальный компьютер. Откройте терминал и выполните следующие команды:

```bash
git clone https://github.com/username/logs_tracker.git
cd logs_tracker
```

### 2. Установка Backend (Django)

Перейдите в ветку backend:

```bash
git checkout backend
```

Установка зависимостей
Создайте и активируйте виртуальное окружение:

Для Windows:

```bash
python -m venv .venv
.venv\Scripts\activate
```

Для Linux/Mac:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Установите зависимости:

```bash
pip install -r requirements.txt
```

Настройка базы данных
Выполните миграции для создания необходимых таблиц в базе данных:

```bash
python manage.py makemigrations
python manage.py migrate
```

Запустите сервер:

```bash
python manage.py runserver
```

### 3. Установка Frontend (React)

Для установки фронтенда вашего приложения выполните следующие шаги:

1. Перейдите в директорию фронтенда
После клонирования репозитория вам необходимо перейти в ветку, содержащую код фронтенда. Выполните следующие команды:

```bash
cd logs_tracker
git checkout frontend
cd logs-tracker-frontend
```

2. Установка зависимостей
Теперь установите все необходимые зависимости для вашего React приложения. Выполните следующую команду:
```bash
npm install
```

3. Запуск приложения
После успешной установки зависимостей вы можете запустить React приложение. Используйте следующую команду:

```bash
npm start
```


### 3. Скриншоты

Страница списка логов

![](https://github.com/RuslanAl1mov/logs_tracker/blob/master/Screenshots/scr1.png)

Страница формы добавления новых логов

![](https://github.com/RuslanAl1mov/logs_tracker/blob/master/Screenshots/scr2.png)
