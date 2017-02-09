<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'medlena_nbs');

/** Имя пользователя MySQL */
define('DB_USER', 'medlena_nbs');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '+DfJ9oZw');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ',qCGCJ_`YY</0aHh<SA%)47W`H6U J<_R(:*A].0>kb!cTT7A:HE{W,wBD,Rh-tY');
define('SECURE_AUTH_KEY',  'K_If2=p7HIM?9wlf]Vd5AEd.mxE<lZMYE+y9dq^m_ya4i@.]22zyK=>g^K[6r/Ff');
define('LOGGED_IN_KEY',    'XRn|_:F)Fv%YxUM(~q3_AX_%BX?(At~PN$2.>Z/=^{?|G#PST:w@p#re2D;:XOGi');
define('NONCE_KEY',        '2_A6@`DM=NuY*[{xfuF-2N?k8<]?xM(3S5TfR[>w*&=F)<a2ne2.YJq.PIQ]:pY|');
define('AUTH_SALT',        'mYOh%V7#B(Pia&j#wT4<q]cocnZ7q-uNi/+ $C~Wd=K7<`>vnsYxo.UC50yuL9Tl');
define('SECURE_AUTH_SALT', '?*jaQRIIgaB.Im.X!0,1{b#z2&yg9s<ExY}dG?>8CC>rD06,n)F.>?X4rh3b6@Fs');
define('LOGGED_IN_SALT',   'oIB8t9A&%K[Eb{Z}p85-,JLkacd~9/LyJb&6fp [t33+w{~L=`6uXyfVD2ms7~RZ');
define('NONCE_SALT',       'l<Cg==^dC>]d_Z/k }~H+65[;R=>`oP(w hDF3gYL-ZB$ToXi=19e#{W}/!XMF:6');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
