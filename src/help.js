const help = (prefix) => {
	return `
「 mauribot 」

◪ informacion
  ❏ prefijo 「  ${prefix}  」
  ❏ creador: mauri
  ❏ instagram: https://www.instagram.com/2x8mfn16

◪ comunicado
${prefix}play ${prefix}ytmp4 y ${prefix}ytmp3 estan en mantenimiento ya que los servidores estan colapsados

◪ para poder usar el bot
  registrate con el comando ${prefix}daftar y tu nombre

◪ nueva actualizacion
  │
  ├─ ❏ ${prefix}welcome 1
  └─ da la bienvenida a los nuevos

◪ por dudas o problemas
  │
  ├─ ❏ ${prefix}creador
  └─ hablale a mi creador si tenes alguna duda o problema 

◪ *CREAR STICKERS*
  │
  ├─ ❏ ${prefix}sticker o s
  ├─ ❏ ${prefix}stickergif
  ├─ 6 segundos de video
  ├─ ❏ ${prefix}toimg
  ├─ De sticker a JPG
  ├─ ❏ ${prefix}tomp3
  └─ De video a MP3

◪ *DESCARGAS*
  │
  ├─ ❏ ${prefix}ytmp4
  ├─ Mas link del video de YT
  ├─ ❏ ${prefix}ytmp3
  └─ Mas link del video de YT

◪ audio
  │
  ├─ ❏ ${prefix}play
  ├─ Mas nombre y artista
  ├─ ❏ ${prefix}bahasa
  └─ ❏ ${prefix}tts es

◪ otros
  │
  ├─ ❏ ${prefix}wame
  ├─ Link de Whatsapp
  ├─❏ ${prefix}qrcode
  └─ Coloca un texto

◪ grupos
  │
  ├─ ❏ ${prefix}closegc
  ├─ Cerrar el grupo solo admins
  ├─ ❏ ${prefix}opengc
  ├─ Abrir grupo solo admins
  ├─ ❏ ${prefix}kick o pafuera
  ├─ Eliminar a un miembro 
  ├─ ❏ ${prefix}promote
  ├─ Dar admin a un miembro
  ├─ ❏ ${prefix}demote
  ├─ Quitar el admin
  ├─ ❏ ${prefix}linkgc
  ├─ Link del grupo
  ├─ ❏ ${prefix}tagall
  └─ Nombra a todos los del grupo

para usar estas funciones el bot necesita admin
  
◪ nsfw nuevas funciones 
  │
  └─ ❏ ${prefix}nsfwmenu

para activar el NSFW pone el siguiente comando, ${prefix}nsfw 1 y para desactivar el NSFW pone ${prefix}nsfw 0`
}

exports.help = help
