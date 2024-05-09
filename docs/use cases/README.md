# Модель прецедентів
Загальна схема

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left to right direction

    actor "Гість" as Guest
    actor "Користувач" as User
    actor "Адміністратор" as Expert

    usecase "Log in\nЗареєструвати обліковий запис" as UC_1
    usecase "Sign in\nУвійти в обліковий запис" as UC_2
    usecase "Log out\nВийти із обікового запису" as UC_3
    usecase "Media content management\nЗапити на пошук та експорт медіа-контенту" as UC_4
    usecase "Account management\nВнесення змін до облікових записів" as UC_5
    usecase "Getting information about users\nПереглянути інформацію щодо облікових записів користувачів" as UC_6

    Guest --> UC_1
    Guest --> UC_2
    Guest --> UC_3

    User --|> Guest
    User --> UC_4

    Expert --|> Guest
    Expert --> UC_5
    Expert --> UC_6

@enduml

</center>

</center>

### Створити обліковий запис користувача

| **_ID:_**                | ADMIN.USER_CREATE                                                  |
| ------------------------ | ------------------------------------------------------------------ |
| **_НАЗВА:_**             | Створення нового облікового запису                                 |
| **_УЧАСНИКИ:_**          | Адміністратор, Система                                             |
| **_ПЕРЕДУМОВИ:_**        | Адміністратор війшов до системи                                    |
| **_РЕЗУЛЬТАТ:_**         | Обліковий запис користувача створено                               |
| **_ВИКЛЮЧНІ СИТУАЦІЇ:_** | 1. Користувач вже зареєстрований(USER.REGISTRATION_EXIST == True)  |
|                          | 2. Поля містять недопустимі символи (USER.INJECTION_DENY)          |
|                          | 3. Багато здійсненних запитів за останні 5 хвилин (USER.DDOS_DENY) |

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

@startuml

    |Адміністратор|
    start;
    : Заповнює форму на реєстрацію користувача
    <font color="red"><b> USER.REGISTRATION_EXIST == True
    <font color="red"><b> USER.USER.INJECTION_DENY == True;

    |Адміністратор|
    : Надсилає запит системі
    на створення користувача
    <font color="red"><b> USER.DDOS_DENY == True;

    |Система|
    : Перевіряє отримані дані з форми;

    |Система|
    : Реєструє нового користувача;

    |Система|
    : Надсилає сповіщення адміністратору\n про успішну реєстрацію;

    |Адміністратор|
    : Повідомляє користувача про створення облікового запису;

    stop;

@enduml
