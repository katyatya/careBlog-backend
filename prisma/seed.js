import { PrismaClient } from '@prisma/client'

import { hashSync } from 'bcrypt'

const prisma = new PrismaClient()

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'Kate Ruad',
				email: 'kate@mail.ru',
				passwordHash: hashSync('1111', 10),
			},
			{
				fullName: 'Admin',
				email: 'user2@test.mail',
				passwordHash: hashSync('1111', 10),
			},
		],
	})

	await prisma.post.createMany({
		data: [
			{
				text: '<p><span style="color: rgb(0, 0, 0);" class="ql-size-large">Самооценка - это нестабильная величина, которая постоянно меняется. </span></p><p><span style="color: rgb(0, 0, 0);" class="ql-size-large">В целом в психологии ученые сходятся в том, что это </span><em class="ql-size-large" style="color: rgb(0, 0, 0);">нестабильная величина</em><span style="color: rgb(0, 0, 0);" class="ql-size-large">, ее уровень меняется день от дня (а у некоторых — едва ли не каждый час). </span></p><p><br></p><h2><span class="ql-size-large" style="background-color: rgb(250, 204, 204);">Что влияет на самооценку</span><span class="ql-size-large"> </span></h2><p><br></p><h3><span class="ql-size-large">Занятия и социальные роли</span></h3><p><br></p><p><span class="ql-size-large">Самооценка в психологии включает в себя как наше общее представление о себе, так и частное — то, как мы проявляемся в конкретной сфере или деятельности, например, в семье или на работе. Чем важнее для нас эта сфера, тем сильнее успехи или неудачи в ней влияют на общую оценку себя. Так, для отличника провалить экзамен будет более болезненно, чем для того, кто не придает учебе большого значения.&nbsp;&nbsp;</span></p><p><br></p><h3><span class="ql-size-large">Убеждения о себе</span></h3><p><br></p><p><span class="ql-size-large">С точки зрения&nbsp;</span><a href="https://alter.ru/guide/kbt#:~:text=%D0%A7%D1%82%D0%BE%20%D0%BF%D0%BE%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C-,%D0%A7%D1%82%D0%BE%20%D1%82%D0%B0%D0%BA%D0%BE%D0%B5%20%D0%9A%D0%9F%D0%A2%3F,%D0%BD%D0%B5%D0%B2%D1%80%D0%BE%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B8%20%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D0%B5%20%D0%BF%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F." rel="noopener noreferrer" target="_blank" style="color: var(--color-font-one); background-color: transparent;" class="ql-size-large">когнитивно-поведенческой терапии</a><span class="ql-size-large">, низкая самооценка — результат негативных убеждений о себе, например, таких: «Я неудачник», «Я не заслуживаю ничего хорошего». В психологии считается, что с такими убеждениями не рождаются — они развиваются в зависимости от жизненного опыта. Как правило, такое психологическое состояние связано с тем, как другие люди с нами обращаются, особенно в период, когда мы взрослеем.&nbsp;На представление личности о себе влияют отношения в семье и со сверстниками.</span></p><p><span class="ql-size-large">Чаще всего к низкой самооценке приводит следующий опыт:</span></p><ul><li><span class="ql-size-large">Физические наказания или пренебрежение в семье.&nbsp;Мы писали о том, как телесные наказания&nbsp;</span><a href="https://blog.alter.ru/likbez/prosto-pochemu-nelzja-bit-detej/" rel="noopener noreferrer" target="_blank" style="color: var(--color-font-one); background-color: transparent;" class="ql-size-large">влияют</a><span class="ql-size-large">&nbsp;на детей. Дети в результате такого опыта могут усвоить, что они «плохие» и заслуживают такого обращения.&nbsp;</span></li><li><span class="ql-size-large">Недостаток похвалы, тепла и любви в семье.&nbsp;Негативное мнение о себе у детей может развиться и без какого-то конкретного травматичного опыта. Это становится результатом дефицита. Когда ребенку не хватает уверенности, что его любят, ценят и принимают в семье, несмотря ни на что, возникает чувство, что он недостаточно хорош.</span></li><li><span class="ql-size-large">Несоответствие ожиданиям других.&nbsp;Чувство, что он недостаточно хорош, также может возникнуть, если ребенок не «дотягивает» до стандартов родителей или других значимых людей. При этом не имеет значения, насколько эти требования реалистичны или справедливы — у детей «застревает» именно факт несоответствия.</span></li><li><span class="ql-size-large">Неспособность «вписаться».&nbsp;Принадлежность к какой-то группе очень важна — это заложено в нас эволюцией. Если ты «другой», особенно в&nbsp;</span><a href="https://blog.alter.ru/likbez/perehodnyj-vozrast-gid-dlja-roditelej/" rel="noopener noreferrer" target="_blank" style="color: var(--color-font-one); background-color: transparent;" class="ql-size-large">подростковом возрасте</a><span class="ql-size-large">, когда идентичность формируется и особенно уязвима, это способно мощно повлиять на чувство собственной ценности.</span></li></ul><p><br></p><h2><span class="ql-size-large" style="background-color: rgb(250, 204, 204);">Чем опасна низкая самооценка</span></h2><p><br></p><p><span class="ql-size-large">Люди с низкой самооценкой склонны преуменьшать свои способности, сомневаться в своих решениях. Могут бояться пробовать новое в жизни, потому что не верят, что способны добиться своих целей. Также у них бывают проблемы в отношениях: им сложно говорить, в чем они нуждаются, и отстаивать свои границы. Такие люди не уверены в себе и чувствуют себя недостойными любви.</span></p><p><span class="ql-size-large">Чек-лист проблем с самооценкой:</span></p><ul><li><span class="ql-size-large">недоверие к собственному мнению (другие всегда лучше разбираются)</span></li><li><span class="ql-size-large">боязнь озвучивать свое мнение или идеи, неуверенность в них</span></li><li><span class="ql-size-large">страх трудностей — кажется, что их ни за что не удастся преодолеть</span></li><li><span class="ql-size-large">ощущение провала из-за того, что не удается достичь желаемого (даже если это нереалистичная цель)</span></li><li><span class="ql-size-large">чрезмерная строгость к себе, часто — нездоровый&nbsp;</span><a href="https://blog.alter.ru/likbez/chem-opasen-perfekcionizm/" rel="noopener noreferrer" target="_blank" style="color: var(--color-font-one); background-color: transparent;" class="ql-size-large">перфекционизм</a><span class="ql-size-large">&nbsp;</span></li><li><span class="ql-size-large">эмоциональная истощенность</span></li><li><span class="ql-size-large">склонность к крайностям: либо работа на износ, либо едва прилагать усилия</span></li><li><span class="ql-size-large">избегание взаимодействия с людьми</span></li><li><span class="ql-size-large">болезненное отношение к критике</span></li><li><br></li></ul><h2><span class="ql-size-large" style="background-color: rgb(250, 204, 204);">Проверь свою самооценку</span></h2><p><br></p><p><span class="ql-size-large">Ключевые элементы здоровой самооценки в психологии:</span></p><ul><li><span class="ql-size-large">уверенность в себе, своих качествах и способностях.&nbsp;</span></li><li><span class="ql-size-large">ощущение безопасности</span></li><li><span class="ql-size-large">идентичность</span></li><li><span class="ql-size-large">чувство сопричастности</span></li><li><span class="ql-size-large">ощущение своей компетентности</span></li><li><span class="ql-size-large">забота о себе и своих интересах</span></li><li><span class="ql-size-large">чувство собственного достоинства</span></li><li><span class="ql-size-large">самоуважение</span></li><li><span class="ql-size-large">понимание своих способностей и ограничений</span></li><li><span class="ql-size-large">способность строить отношения с собой и другими</span></li><li><span class="ql-size-large">реалистичность ожиданий</span></li><li><span class="ql-size-large">понимание своих потребностей и способность их выражать</span></li></ul><p><br></p><p><br></p><p><br></p>',
				title: 'Какой бывает самооценка и зачем она нужна',
				tags: ['самооценка', 'убеждения', 'низка_самооценка'],
				imageUrl: '/uploads/women-walk-with-their-arms-around-each-other.jpeg',
				userId: 1,
			},
		],
	})

	await prisma.comment.createMany({
		data: [
			{
				postId: 1,
				userId: 1,
				commentText: 'Очень крутая статья',
			},
			{
				postId: 1,
				userId: 1,
				commentText: '2 коммент',
			},
		],
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "posts" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "comments" RESTART IDENTITY CASCADE;`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
