# Control de Stock: cómo sacar el .apk y la versión web

Todo se hace desde el computador, una sola vez. GitHub (gratis) arma el .apk y publica la versión web por ti.

## 1. Crear la cuenta y el repositorio
1. Entra a https://github.com/signup y crea una cuenta gratis.
2. Ya dentro, toca el botón verde **New** (o entra a https://github.com/new).
3. En **Repository name** escribe `control-stock`.
4. Déjalo en **Public** (tu código no lleva datos tuyos; los datos quedan en tu celular).
5. Toca **Create repository**.

## 2. Subir los archivos
1. En la página del repositorio nuevo, toca **uploading an existing file**.
2. Abre la carpeta `control-stock-app` en tu computador, selecciona **todo su contenido** (incluida la carpeta `.github`) y arrástralo a la página.
3. Espera a que termine de cargar y toca **Commit changes**.

Si no aparece la carpeta `.github` en GitHub, crea los dos archivos a mano: **Add file > Create new file**, escribe la ruta `.github/workflows/android.yml` y pega el contenido del archivo del mismo nombre; repite con `web.yml`.

## 3. Activar la versión web
1. En el repositorio: **Settings > Pages**.
2. En **Source** elige **GitHub Actions**.
3. Ve a la pestaña **Actions**, entra a **Publicar versión web** y toca **Run workflow** si no arrancó sola.
4. Cuando salga el visto bueno verde, tu app web queda en `https://TU-USUARIO.github.io/control-stock/`.

## 4. Bajar el .apk
1. En la pestaña **Actions** espera a que **Crear APK** termine con visto bueno verde (tarda entre 5 y 15 minutos).
2. Vuelve a la página principal del repositorio y toca **Releases** (columna derecha).
3. Desde el celular, abre esa página y descarga `control-stock.apk`.
4. Ábrelo. Android pedirá permiso para instalar apps de esta fuente: acéptalo.

## Cosas que debes saber
- Al principio los datos se guardan **dentro de cada dispositivo**: el .apk y la página web no se sincronizan.
- Para que los dos muestren el mismo inventario (y para tener respaldo en la nube), sigue **LEEME-NUBE.md** después de este paso.
- Sin la nube, para pasar datos de un dispositivo a otro usa **Inventario > Copia de seguridad e importar**.
- También puedes importar tu Excel: guárdalo como **CSV** y usa **Importar (.csv)**. Reconoce las columnas por nombre: producto, cantidad, mínimo, precio cliente, precio costo y ubicación; las demás columnas se agregan como características.
- El .apk es de prueba (firma de depuración). Sirve para instalarlo en tu celular, pero no para subirlo a Play Store.
- Si **Crear APK** sale con una X roja, abre ese intento, copia el mensaje de error y envíaselo a Claude.
