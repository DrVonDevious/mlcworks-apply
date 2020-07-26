<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mlcworks' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '($FO1cMWnZDXEt>TS_wI:XQSI_~o.sYBF{;a@%G)]H#XkO&YH,sQ}qiBM+@`[|^H' );
define( 'SECURE_AUTH_KEY',   'fCUV2[&]riEg`0C#MD8b+gsu@{y}OFD;+Ng#|nWMX5W^d3|_(,7,-pTtvUfCZH9)' );
define( 'LOGGED_IN_KEY',     'q<Q<f1q7ON~4,tN{`rC(je~JCbm3sC1.|81FTFKo;V{s~G(F^,B~05@gT9^r (=G' );
define( 'NONCE_KEY',         '!S_iI9n<~/VX7:d{U6qD`&Y6+}iF:$dp?uW/FLb-$Kck*GF{h`+Lp_:e $[<E <h' );
define( 'AUTH_SALT',         ')6q&$x0;K(fXI[vYP5BLYTuK-1QmT[B)PJOw<fR~w!?&gSl!L{h^}> Nn6F?AG<!' );
define( 'SECURE_AUTH_SALT',  '*koEcYSHZa4(wHdn>n#a.pG4xRR&ieEe=@[xR)#Rj}l-`GJQe_HN~jIjx VJY1Su' );
define( 'LOGGED_IN_SALT',    'e*YqN%^YQ}HVp uaPj4B9vgpS8K7_zk}G@eHySA@pO$M2:lP<0[Fu2Og|6}~m?bF' );
define( 'NONCE_SALT',        '}!yj;E{Xnv/4mXzjPWGa[7ojz/RUwoUlq%n,s<Qy!ygLJeBSAQy0CEdT}](tp$kt' );
define( 'WP_CACHE_KEY_SALT', '!c:*ZYd,,u6??r@w]u*b#|{VCFFyjw$We!j*:L7I<9y$E$?k,JoKcI6(fjcVPYju' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
