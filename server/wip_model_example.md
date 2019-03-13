# Models for DB

## User
**ID**
    -uuid
**UserName**
    -string
**FirstName**
    -string
**LastName**
    -string
**Email**
    -string
**Phone**
    -integer
**Password**
    -string _encrypted_
**Premium**
    -boolean
**NotificationCount**
    -integer


## Notifications
**ID**
    -uuid
**UserID**
    -foreign key
**Name**
    -string
**URL**
    -string
**ResultCount**
    -integer
**Frequency**
    -integer