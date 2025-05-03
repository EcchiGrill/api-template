import { DocumentBuilder } from '@nestjs/swagger'

export const config = new DocumentBuilder()
  .setTitle('Template | Dmytro Oborskyi')
  .setDescription(`<h2>REST API Template</h2>`)
  .setVersion('1.0')
  .build()
