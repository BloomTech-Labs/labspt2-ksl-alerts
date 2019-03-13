# Models for DB

## User
|_KEY_|**ID**|**UserName**|**FirstName**|**LastName**|**Email**|**Phone**|**Password**|**Premium**|**NotificationCount**|
|---|---|---|---|---|---|---|---|---|---|
|_TYPE_|UUID|String|String|String|String|Integer|String _encrypted_|Boolean|Integer|



## Notifications
|_KEY_|**ID**|**UserID**|**Name**|**URL**|**ResultCount**|**Frequency**|
|---|---|---|---|---|---|---|
|_TYPE_|UUID|Foreign Key|String|String|integer|integer|
