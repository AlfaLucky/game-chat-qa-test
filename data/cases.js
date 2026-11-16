/* Source of truth for the public QA scenario browser. Fictional project. */
window.GAME_CHAT_CASES = [
  {
    "id": "CHAT-001",
    "group": "Функциональность · Каналы",
    "priority": "P1",
    "title": "Открытие общего канала",
    "preconditions": "Аккаунт авторизован, есть доступ к каналу",
    "steps": [
      "Открыть чат",
      "выбрать «Лобби»"
    ],
    "expected": "Отображается история Лобби, нет содержимого других каналов",
    "requiresSpec": false
  },
  {
    "id": "CHAT-002",
    "group": "Функциональность · Каналы",
    "priority": "P1",
    "title": "Переключение между каналами",
    "preconditions": "Доступны Лобби и Группа",
    "steps": [
      "Открыть Лобби",
      "перейти в Группу",
      "вернуться"
    ],
    "expected": "Показывается история соответствующего канала, сообщения не смешиваются",
    "requiresSpec": false
  },
  {
    "id": "CHAT-003",
    "group": "Функциональность · Каналы",
    "priority": "P1",
    "title": "Открытие личного диалога",
    "preconditions": "Есть разрешённый диалог с B",
    "steps": [
      "Открыть список",
      "выбрать B"
    ],
    "expected": "Заголовок, участники и история соответствуют B",
    "requiresSpec": false
  },
  {
    "id": "CHAT-004",
    "group": "Функциональность · Каналы",
    "priority": "P1",
    "title": "Недоступный канал",
    "preconditions": "Нет членства в закрытой группе",
    "steps": [
      "Попробовать открыть группу по прямому ID"
    ],
    "expected": "Доступ отклонён на сервере, история не возвращается",
    "requiresSpec": false
  },
  {
    "id": "CHAT-005",
    "group": "Функциональность · Каналы",
    "priority": "P2",
    "title": "Пустой канал",
    "preconditions": "Канал существует без сообщений",
    "steps": [
      "Открыть его"
    ],
    "expected": "Корректное пустое состояние без ошибочных сообщений",
    "requiresSpec": false
  },
  {
    "id": "CHAT-006",
    "group": "Функциональность · Каналы",
    "priority": "P1",
    "title": "Переключение при входящем сообщении",
    "preconditions": "Два канала доступны",
    "steps": [
      "Открыть A",
      "отправить в B",
      "перейти в B"
    ],
    "expected": "Событие доступно только в B, не потеряно",
    "requiresSpec": false
  },
  {
    "id": "CHAT-007",
    "group": "Функциональность · Каналы",
    "priority": "P2",
    "title": "Восстановление выбранного канала",
    "preconditions": "Канал выбран ранее",
    "steps": [
      "Закрыть панель",
      "открыть повторно"
    ],
    "expected": "Применяется согласованное правило восстановления выбора",
    "requiresSpec": false
  },
  {
    "id": "CHAT-008",
    "group": "Функциональность · Каналы",
    "priority": "P2",
    "title": "Канал удалён или доступ отозван",
    "preconditions": "Пользователь находился в канале",
    "steps": [
      "Отозвать membership",
      "выполнить действие"
    ],
    "expected": "Доступ обновлён, нет чтения закрытых сообщений",
    "requiresSpec": false
  },
  {
    "id": "CHAT-009",
    "group": "Функциональность · Каналы",
    "priority": "P2",
    "title": "Длинное имя участника",
    "preconditions": "Есть имя с длинным Unicode",
    "steps": [
      "Открыть личный канал"
    ],
    "expected": "Имя не перекрывает кнопки и адресат различим",
    "requiresSpec": false
  },
  {
    "id": "CHAT-010",
    "group": "Функциональность · Каналы",
    "priority": "P1",
    "title": "Смена канала во время отправки",
    "preconditions": "Сообщение A имеет статус sending",
    "steps": [
      "Переключиться в B",
      "дождаться ack"
    ],
    "expected": "Сообщение A остаётся в A, статус корректно обновляется",
    "requiresSpec": false
  },
  {
    "id": "CHAT-011",
    "group": "Функциональность · Ввод",
    "priority": "P1",
    "title": "Отправка допустимого текста",
    "preconditions": "Активен разрешённый канал",
    "steps": [
      "Ввести текст",
      "нажать отправить"
    ],
    "expected": "Сервер возвращает message_id, текст появляется в истории канала",
    "requiresSpec": false
  },
  {
    "id": "CHAT-012",
    "group": "Функциональность · Ввод",
    "priority": "P1",
    "title": "Отправка пустого сообщения",
    "preconditions": "Поле пустое",
    "steps": [
      "Нажать отправить"
    ],
    "expected": "Запрос не создаётся или сервер отклоняет пустой контент по контракту",
    "requiresSpec": true
  },
  {
    "id": "CHAT-013",
    "group": "Функциональность · Ввод",
    "priority": "P2",
    "title": "Только пробелы и переводы строк",
    "preconditions": "Поле доступно",
    "steps": [
      "Ввести пробелы и переносы",
      "отправить"
    ],
    "expected": "Применяется утверждённое правило trim/валидации",
    "requiresSpec": false
  },
  {
    "id": "CHAT-014",
    "group": "Функциональность · Ввод",
    "priority": "P1",
    "title": "Ровно максимальная длина",
    "preconditions": "Уточнён лимит N символов",
    "steps": [
      "Ввести N символов",
      "отправить"
    ],
    "expected": "Сообщение принято без потери символов",
    "requiresSpec": false
  },
  {
    "id": "CHAT-015",
    "group": "Функциональность · Ввод",
    "priority": "P1",
    "title": "Превышение максимальной длины",
    "preconditions": "Уточнён лимит N",
    "steps": [
      "Ввести N+1 символ"
    ],
    "expected": "Ввод ограничен либо показана ошибка без молчаливого усечения",
    "requiresSpec": false
  },
  {
    "id": "CHAT-016",
    "group": "Функциональность · Ввод",
    "priority": "P2",
    "title": "Смешанная кириллица и латиница",
    "preconditions": "Поле доступно",
    "steps": [
      "Ввести RU/EN",
      "отправить"
    ],
    "expected": "Доставка без подмены символов и кодировок",
    "requiresSpec": false
  },
  {
    "id": "CHAT-017",
    "group": "Функциональность · Ввод",
    "priority": "P1",
    "title": "Эмодзи и составные символы",
    "preconditions": "Поле доступно",
    "steps": [
      "Ввести emoji с ZWJ, combining marks",
      "отправить"
    ],
    "expected": "Текст сохраняется без повреждения grapheme clusters",
    "requiresSpec": false
  },
  {
    "id": "CHAT-018",
    "group": "Функциональность · Ввод",
    "priority": "P2",
    "title": "Переносы строк",
    "preconditions": "Поле многострочное по требованиям",
    "steps": [
      "Ввести текст с newline",
      "отправить"
    ],
    "expected": "Отображение и фактический payload соответствуют правилам",
    "requiresSpec": true
  },
  {
    "id": "CHAT-019",
    "group": "Функциональность · Ввод",
    "priority": "P1",
    "title": "Повторное нажатие отправки",
    "preconditions": "Текст введён",
    "steps": [
      "Нажать send многократно быстро"
    ],
    "expected": "Один пользовательский акт не приводит к незапланированным дубликатам",
    "requiresSpec": false
  },
  {
    "id": "CHAT-020",
    "group": "Функциональность · Ввод",
    "priority": "P2",
    "title": "Черновик при смене канала",
    "preconditions": "Текст набран, не отправлен",
    "steps": [
      "Переключить канал",
      "вернуться"
    ],
    "expected": "Черновик сохраняется/сбрасывается по утверждённой политике, не уходит другому адресату",
    "requiresSpec": true
  },
  {
    "id": "CHAT-021",
    "group": "Функциональность · Ввод",
    "priority": "P2",
    "title": "Вставка длинного текста",
    "preconditions": "Поле доступно",
    "steps": [
      "Вставить большой блок через clipboard"
    ],
    "expected": "Нет зависания, лимиты применяются безопасно",
    "requiresSpec": false
  },
  {
    "id": "CHAT-022",
    "group": "Функциональность · Ввод",
    "priority": "P1",
    "title": "Кнопка send при pending",
    "preconditions": "Идёт отправка",
    "steps": [
      "Нажать send повторно"
    ],
    "expected": "Не создаётся второй запрос без новой уникальной операции",
    "requiresSpec": false
  },
  {
    "id": "CHAT-023",
    "group": "Доставка и сеть",
    "priority": "P0",
    "title": "Сквозная доставка A → B",
    "preconditions": "Два онлайн-игрока в канале",
    "steps": [
      "A отправляет",
      "B получает",
      "сверить серверный ID"
    ],
    "expected": "Оба клиента видят один серверный message_id и правильного отправителя",
    "requiresSpec": false
  },
  {
    "id": "CHAT-024",
    "group": "Доставка и сеть",
    "priority": "P0",
    "title": "Потеря ack после server commit",
    "preconditions": "Есть сетевой прокси и idempotency key",
    "steps": [
      "Отправить",
      "оборвать сеть после commit до ответа",
      "повторить"
    ],
    "expected": "На сервере не более одного сообщения для одного request_id",
    "requiresSpec": false
  },
  {
    "id": "CHAT-025",
    "group": "Доставка и сеть",
    "priority": "P1",
    "title": "Обрыв до request",
    "preconditions": "Клиент ещё не отправил пакет",
    "steps": [
      "Перевести устройство offline",
      "нажать send"
    ],
    "expected": "Нет ложного успешного статуса, данные не пропадают незаметно",
    "requiresSpec": false
  },
  {
    "id": "CHAT-026",
    "group": "Доставка и сеть",
    "priority": "P1",
    "title": "Обрыв во время отправки",
    "preconditions": "Сеть нестабильна",
    "steps": [
      "Начать отправку",
      "оборвать соединение"
    ],
    "expected": "Показан соответствующий sending/failed/unknown статус",
    "requiresSpec": false
  },
  {
    "id": "CHAT-027",
    "group": "Доставка и сеть",
    "priority": "P1",
    "title": "Восстановление соединения",
    "preconditions": "После обрыва есть события",
    "steps": [
      "Перейти offline",
      "получить новые серверные события",
      "включить сеть"
    ],
    "expected": "Догрузка событий без пропусков и дубликатов",
    "requiresSpec": false
  },
  {
    "id": "CHAT-028",
    "group": "Доставка и сеть",
    "priority": "P1",
    "title": "Повторное серверное событие",
    "preconditions": "Есть message_id M",
    "steps": [
      "Дважды доставить event M"
    ],
    "expected": "Клиент показывает одно сообщение с M",
    "requiresSpec": false
  },
  {
    "id": "CHAT-029",
    "group": "Доставка и сеть",
    "priority": "P1",
    "title": "Перестановка событий",
    "preconditions": "Есть события M1/M2",
    "steps": [
      "Изменить порядок получения пакетов"
    ],
    "expected": "История отсортирована по гарантированному серверному порядку",
    "requiresSpec": false
  },
  {
    "id": "CHAT-030",
    "group": "Доставка и сеть",
    "priority": "P1",
    "title": "Медленный ответ сервера",
    "preconditions": "Симулируется высокая задержка",
    "steps": [
      "Отправить сообщение"
    ],
    "expected": "UI остаётся отзывчивым, статус не становится success заранее",
    "requiresSpec": false
  },
  {
    "id": "CHAT-031",
    "group": "Доставка и сеть",
    "priority": "P1",
    "title": "Серверный отказ 4xx",
    "preconditions": "Действует бизнес-ограничение",
    "steps": [
      "Отправить запрос, получить отказ"
    ],
    "expected": "Ошибка отображается, сообщение не помечено accepted",
    "requiresSpec": false
  },
  {
    "id": "CHAT-032",
    "group": "Доставка и сеть",
    "priority": "P1",
    "title": "Ошибка сервера 5xx",
    "preconditions": "Backend возвращает 5xx",
    "steps": [
      "Отправить текст"
    ],
    "expected": "Клиент не теряет контент и не заявляет успех",
    "requiresSpec": false
  },
  {
    "id": "CHAT-033",
    "group": "Доставка и сеть",
    "priority": "P0",
    "title": "Параллельная отправка одного request ID",
    "preconditions": "Две параллельные попытки доступны",
    "steps": [
      "Запустить одинаковые запросы конкурентно"
    ],
    "expected": "Один подтверждённый результат, без двойного создания",
    "requiresSpec": false
  },
  {
    "id": "CHAT-034",
    "group": "Доставка и сеть",
    "priority": "P1",
    "title": "Два сообщения с близким временем",
    "preconditions": "A и B отправляют одновременно",
    "steps": [
      "Отправить и получить оба"
    ],
    "expected": "Оба имеют уникальные ID, нет коллизии по timestamp",
    "requiresSpec": false
  },
  {
    "id": "CHAT-035",
    "group": "История и хранение",
    "priority": "P1",
    "title": "Загрузка первой страницы",
    "preconditions": "У канала есть история",
    "steps": [
      "Открыть чат"
    ],
    "expected": "Получена корректная страница, нет дубликатов",
    "requiresSpec": false
  },
  {
    "id": "CHAT-036",
    "group": "История и хранение",
    "priority": "P1",
    "title": "Пагинация назад",
    "preconditions": "История больше page_size",
    "steps": [
      "Прокрутить к старым сообщениям"
    ],
    "expected": "Загружается предыдущая страница без пропусков",
    "requiresSpec": false
  },
  {
    "id": "CHAT-037",
    "group": "История и хранение",
    "priority": "P1",
    "title": "Новые сообщения во время пагинации",
    "preconditions": "Идёт загрузка старых сообщений",
    "steps": [
      "Получить новое событие"
    ],
    "expected": "Нет дублей и скачка последовательности",
    "requiresSpec": false
  },
  {
    "id": "CHAT-038",
    "group": "История и хранение",
    "priority": "P2",
    "title": "Сохранение scroll position",
    "preconditions": "Пользователь читает старую историю",
    "steps": [
      "Получить входящее сообщение"
    ],
    "expected": "Позиция не сбрасывается неожиданно",
    "requiresSpec": false
  },
  {
    "id": "CHAT-039",
    "group": "История и хранение",
    "priority": "P1",
    "title": "Сверка истории после reinstall",
    "preconditions": "Хранение серверное по контракту",
    "steps": [
      "Удалить и переустановить приложение",
      "войти"
    ],
    "expected": "Серверная история восстановлена по политике ретенции",
    "requiresSpec": true
  },
  {
    "id": "CHAT-040",
    "group": "История и хранение",
    "priority": "P1",
    "title": "Сообщение удалено сервером",
    "preconditions": "Удаление поддерживается",
    "steps": [
      "Удалить сообщение",
      "синхронизировать клиент"
    ],
    "expected": "Состояние всех клиентов соответствует серверному",
    "requiresSpec": true
  },
  {
    "id": "CHAT-041",
    "group": "История и хранение",
    "priority": "P2",
    "title": "Очень длинная история",
    "preconditions": "Сгенерированы 1000+ сообщений",
    "steps": [
      "Прокручивать, отправлять и переключать каналы"
    ],
    "expected": "Отзывчивость остаётся приемлемой по согласованному порогу",
    "requiresSpec": true
  },
  {
    "id": "CHAT-042",
    "group": "История и хранение",
    "priority": "P1",
    "title": "Граница ретенции",
    "preconditions": "Есть сообщения старше и моложе срока хранения",
    "steps": [
      "Открыть историю"
    ],
    "expected": "Видны только сообщения, допустимые политикой хранения",
    "requiresSpec": false
  },
  {
    "id": "CHAT-043",
    "group": "Безопасность",
    "priority": "P0",
    "title": "IDOR: чтение чужого диалога",
    "preconditions": "A не состоит в диалоге B↔C",
    "steps": [
      "A запрашивает историю по conversation_id B↔C"
    ],
    "expected": "Сервер запрещает доступ и не возвращает payload",
    "requiresSpec": false
  },
  {
    "id": "CHAT-044",
    "group": "Безопасность",
    "priority": "P0",
    "title": "IDOR: отправка в чужой диалог",
    "preconditions": "A не состоит в диалоге B↔C",
    "steps": [
      "A отправляет запрос с чужим conversation_id"
    ],
    "expected": "Запрос отклонён сервером, новых сообщений в диалоге нет",
    "requiresSpec": false
  },
  {
    "id": "CHAT-045",
    "group": "Безопасность",
    "priority": "P1",
    "title": "Истёкший токен",
    "preconditions": "Сессия истекла",
    "steps": [
      "Отправить сообщение с просроченным токеном"
    ],
    "expected": "Получен auth error; нет неавторизованного принятия",
    "requiresSpec": false
  },
  {
    "id": "CHAT-046",
    "group": "Безопасность",
    "priority": "P1",
    "title": "Подмена отправителя",
    "preconditions": "A авторизован",
    "steps": [
      "Подставить sender_id=B в payload"
    ],
    "expected": "Сервер игнорирует/отклоняет подмену; автор определяется токеном",
    "requiresSpec": false
  },
  {
    "id": "CHAT-047",
    "group": "Безопасность",
    "priority": "P1",
    "title": "XSS/HTML-контент",
    "preconditions": "Клиент может получать спецстроки",
    "steps": [
      "Отправить HTML/script строку"
    ],
    "expected": "Текст безопасно отображается без исполнения",
    "requiresSpec": false
  },
  {
    "id": "CHAT-048",
    "group": "Безопасность",
    "priority": "P1",
    "title": "Опасный URL",
    "preconditions": "Ссылки поддерживаются по контракту",
    "steps": [
      "Отправить URL со схемой javascript:"
    ],
    "expected": "Нет исполнения кода и небезопасного перехода",
    "requiresSpec": true
  },
  {
    "id": "CHAT-049",
    "group": "Безопасность",
    "priority": "P1",
    "title": "Rate limiting",
    "preconditions": "Сервер настроен по правилам",
    "steps": [
      "Отправить пачку сообщений выше лимита"
    ],
    "expected": "Запросы ограничены на сервере, статус понятен",
    "requiresSpec": true
  },
  {
    "id": "CHAT-050",
    "group": "Безопасность",
    "priority": "P1",
    "title": "Текст приватных сообщений в логах",
    "preconditions": "Доступны тестовые логи",
    "steps": [
      "Отправить приватный текст",
      "осмотреть логи и аналитику"
    ],
    "expected": "Нет персональных данных вне разрешённого контракта",
    "requiresSpec": false
  },
  {
    "id": "CHAT-051",
    "group": "Сессии и синхронизация",
    "priority": "P0",
    "title": "Logout очищает чужие данные",
    "preconditions": "A имеет приватную историю",
    "steps": [
      "Выполнить logout",
      "открыть клиентское хранилище"
    ],
    "expected": "Кеш A недоступен неавторизованному пользователю",
    "requiresSpec": false
  },
  {
    "id": "CHAT-052",
    "group": "Сессии и синхронизация",
    "priority": "P0",
    "title": "Смена аккаунта A→B",
    "preconditions": "Оба игрока имеют разные диалоги",
    "steps": [
      "Выйти из A",
      "войти в B"
    ],
    "expected": "Чаты, черновики, бейджи и профили A не видны B",
    "requiresSpec": false
  },
  {
    "id": "CHAT-053",
    "group": "Сессии и синхронизация",
    "priority": "P1",
    "title": "Два устройства одного игрока",
    "preconditions": "A авторизован на 2 устройствах",
    "steps": [
      "Отправить и прочитать сообщения на одном"
    ],
    "expected": "Другое устройство синхронизируется по согласованным правилам",
    "requiresSpec": true
  },
  {
    "id": "CHAT-054",
    "group": "Сессии и синхронизация",
    "priority": "P1",
    "title": "Foreground → background → foreground",
    "preconditions": "Есть активный канал",
    "steps": [
      "Свернуть игру",
      "получить событие",
      "вернуться"
    ],
    "expected": "История и курсор синхронизированы, дубликатов нет",
    "requiresSpec": false
  },
  {
    "id": "CHAT-055",
    "group": "Сессии и синхронизация",
    "priority": "P1",
    "title": "Смена Wi‑Fi → mobile data",
    "preconditions": "Идёт чат",
    "steps": [
      "Переключить сеть при активном соединении"
    ],
    "expected": "Соединение восстановлено без потерь в пределах гарантий",
    "requiresSpec": false
  },
  {
    "id": "CHAT-056",
    "group": "Сессии и синхронизация",
    "priority": "P1",
    "title": "Отозванное членство",
    "preconditions": "Игрок состоит в группе",
    "steps": [
      "Удалить из группы на сервере",
      "отправить запрос"
    ],
    "expected": "Нет доступа после отзыва, интерфейс актуализируется",
    "requiresSpec": false
  },
  {
    "id": "CHAT-057",
    "group": "Сессии и синхронизация",
    "priority": "P2",
    "title": "Закрыть панель с черновиком",
    "preconditions": "Есть неотправленный текст",
    "steps": [
      "Закрыть и открыть панель"
    ],
    "expected": "Черновик обработан по определённой продуктовой политике",
    "requiresSpec": false
  },
  {
    "id": "CHAT-058",
    "group": "Сессии и синхронизация",
    "priority": "P2",
    "title": "Невалидная локальная история",
    "preconditions": "Кеш повреждён тестовым способом",
    "steps": [
      "Запустить клиент"
    ],
    "expected": "Нет краша, клиент может восстановиться из server source of truth",
    "requiresSpec": false
  },
  {
    "id": "CHAT-059",
    "group": "UX и совместимость",
    "priority": "P1",
    "title": "Клавиатура не скрывает отправку",
    "preconditions": "Малый экран",
    "steps": [
      "Открыть чат и клавиатуру"
    ],
    "expected": "Поле и send доступны, нет перекрытия safe area",
    "requiresSpec": false
  },
  {
    "id": "CHAT-060",
    "group": "UX и совместимость",
    "priority": "P2",
    "title": "Увеличенный системный шрифт",
    "preconditions": "Поддерживается accessibility font scale",
    "steps": [
      "Установить крупный размер текста"
    ],
    "expected": "Основные действия доступны, текст не потерян",
    "requiresSpec": false
  },
  {
    "id": "CHAT-061",
    "group": "UX и совместимость",
    "priority": "P2",
    "title": "Многострочное сообщение",
    "preconditions": "Есть длинный текст",
    "steps": [
      "Открыть историю"
    ],
    "expected": "Пузырь сообщения не перекрывает соседние элементы",
    "requiresSpec": false
  },
  {
    "id": "CHAT-062",
    "group": "UX и совместимость",
    "priority": "P2",
    "title": "Длинные имена",
    "preconditions": "Имя в 100 символов",
    "steps": [
      "Открыть чат"
    ],
    "expected": "Имя ограничено/переносится безопасно",
    "requiresSpec": false
  },
  {
    "id": "CHAT-063",
    "group": "UX и совместимость",
    "priority": "P2",
    "title": "RTL и смешанное направление",
    "preconditions": "Локаль RTL поддерживается",
    "steps": [
      "Отправить смешанный текст RU/Arabic/числа"
    ],
    "expected": "Порядок символов и время читаемы",
    "requiresSpec": true
  },
  {
    "id": "CHAT-064",
    "group": "UX и совместимость",
    "priority": "P2",
    "title": "Низкая скорость сети в UI",
    "preconditions": "Высокая задержка",
    "steps": [
      "Открыть канал и отправить"
    ],
    "expected": "Есть loading/ошибка, доступна навигация",
    "requiresSpec": false
  },
  {
    "id": "CHAT-065",
    "group": "UX и совместимость",
    "priority": "P2",
    "title": "Пустой список диалогов",
    "preconditions": "Нет диалогов",
    "steps": [
      "Открыть список"
    ],
    "expected": "Пустое состояние понятное и доступное",
    "requiresSpec": false
  },
  {
    "id": "CHAT-066",
    "group": "UX и совместимость",
    "priority": "P2",
    "title": "Контраст и screen reader",
    "preconditions": "Включены средства доступности",
    "steps": [
      "Перейти по кнопкам чата"
    ],
    "expected": "Кнопки имеют доступные имена и корректный порядок фокуса",
    "requiresSpec": false
  },
  {
    "id": "CHAT-067",
    "group": "Игровая интеграция",
    "priority": "P0",
    "title": "Одноразовая награда: double tap",
    "preconditions": "Доступна одноразовая серверная операция",
    "steps": [
      "Нажать действие дважды быстро",
      "сверить ledger"
    ],
    "expected": "Ресурс начислен только один раз",
    "requiresSpec": false
  },
  {
    "id": "CHAT-068",
    "group": "Игровая интеграция",
    "priority": "P0",
    "title": "Одноразовая награда: повтор запроса",
    "preconditions": "Операция выполнена, ответ потерян",
    "steps": [
      "Повторить запрос с тем же action ID"
    ],
    "expected": "Повторного начисления нет, состояние согласовано",
    "requiresSpec": false
  },
  {
    "id": "CHAT-069",
    "group": "Игровая интеграция",
    "priority": "P1",
    "title": "Игрок не имеет права на награду",
    "preconditions": "Операция доступна другому игроку",
    "steps": [
      "Подставить action ID"
    ],
    "expected": "Backend запрещает начисление",
    "requiresSpec": false
  },
  {
    "id": "CHAT-070",
    "group": "Игровая интеграция",
    "priority": "P1",
    "title": "Игровой сервис не отвечает",
    "preconditions": "Сервис недоступен",
    "steps": [
      "Нажать действие в карточке"
    ],
    "expected": "UI показывает ошибку, не заявляет об успешном начислении",
    "requiresSpec": false
  },
  {
    "id": "CHAT-071",
    "group": "Игровая интеграция",
    "priority": "P1",
    "title": "Синхронизация баланса",
    "preconditions": "Операция успешно проведена",
    "steps": [
      "Обновить экран и зайти другим устройством"
    ],
    "expected": "Баланс совпадает с server source of truth",
    "requiresSpec": false
  },
  {
    "id": "CHAT-072",
    "group": "Игровая интеграция",
    "priority": "P1",
    "title": "Истёкшая системная карточка",
    "preconditions": "Время жизни действия истекло",
    "steps": [
      "Нажать кнопку действия"
    ],
    "expected": "Операция отклонена по контракту, начисления нет",
    "requiresSpec": true
  }
];
