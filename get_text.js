let phrases = [
{text: 'Твой голос — самый приятный на свете'},
{text: 'Я люблю тебя, за твою непредсказуемость'},
{text: 'Ты самая красивая на свете'},
{text: 'Твои фото согревают меня в любое время'},
{text: 'Я люблю тебя просто так'},
{text: 'Я люблю тебя, потому что ты светишь каждое утро для меня'},
{text: 'Я хочу трогать твои волосы'},
{text: 'Я хочу с тобой смотреть хентай, а потом повторять моменты'},
{text: 'Хочу тебя всегда, везде и только тебя'},
{text: 'Люблю когда ты пытаешься меня злить'},
{text: 'От твоего сообщения мне становится тепло'},
{text: 'Я люблю просыпаться и видеть сообщение от тебя'},
{text: 'Мне нравится заниматься делами вместе с тобой'},
{text: 'Я хочу с тобой гулять по ночному городу'},
{text: 'Я тону в твоих глазах'},
{text: 'Мы стали с тобой родными'},
{text: 'Ты самая хорошая и самая интересная из всех моих знакомых'},
{text: 'Я хочу гулять, держа тебя за руку'},
{text: 'Если ты далеко, то я очень скучаю'},
{text: 'Твоя улыбка — как лучик солнца'},
{text: 'Когда на мой телефон приходит уведомление, я надеюсь, что оно от тебя'},
{text: 'Устоять против твоих чар — невозможно'},
{text: 'Ты терпишь, когда я включаю передачу, которая тебе не нравится'},
{text: 'Мне очень приятно дотрагиваться до твоей шелковистой кожи'},
{text: 'Ты — принцесса'},
{text: 'Когда я дарю тебе подарки, ты радуешься, как маленькая'},
{text: 'Я хочу гулять с тобой под дождем'},
{text: 'Ты — мой близкий человек'},
{text: 'Ты всегда выглядишь, как голливудская звезда'},
{text: 'Ты греешь меня, когда мне холодно'},
{text: 'Еда, которую приготовила ты — самая вкусная'},
{text: 'Я горжусь, что рядом со мной такая роскошная девушка'},
{text: 'О тебе щебечут птицы, журчит вода и поет ветер'},
{text: 'Я не могу уснуть, если ты не пожелаешь мне спокойной ночи НУ ПОЧТИ'},
{text: 'У тебя красивая фигура'},
{text: 'Когда я принимаю ванну, я хочу чтобы ты была в ней вместе со мной'},
{text: 'Ради тебя мне хочется становиться лучше'},
{text: 'Ты маленькая и беззащитная'},
{text: 'Я люблю твою улыбку'},
{text: 'Ты неповторимая'},
{text: 'Я не умею долго обижаться на тебя'},
{text: 'Мои лучшие воспоминания — о тебе'},
{text: 'Мы счастливы вместе'},
{text: 'Мы самая красивая пара'},
{text: 'Мы дополняем друг друга'},
{text: 'Мы вместе, потому что так решили звезды'},
{text: 'Когда мы вместе — солнце светит ярче'},
{text: 'Когда мы вместе — мы в сто раз сильней'},
{text: 'Ты одна сумела меня покорить'},
{text: 'Рядом с тобой я становлюсь спокойным и домашним'},
{text: 'Ни одна девушка на свете не может сравниться с тобой'},
{text: 'У тебя брови, как у киноактрисы'},
{text: 'Ты понимаешь меня, а я понимаю тебя'},
{text: 'Мы с тобой — единое целое'},
{text: 'Ты самая соблазнительная'},
{text: 'Ты — мое солнышко'},
{text: 'Ты — мое солнышко'},
{text: 'Ты — мое солнышко'},
{text: 'Ты — мое солнышко'},
{text: 'Ты — мое солнышко'},
{text: 'Ты веришь в меня, и постоянно думаешь обо мне'},
{text: 'Когда я слышу песни о любви, я думаю, что это о нас'},
{text: 'Мне нравится с тобой говорить'},
{text: 'Мне нравится с тобой молчать'},
{text: 'У тебя доброе, чувственное, трепетное, нежное, большое, горячее и чистое сердце'},
{text: 'Твои губы сладкие, манящие и ласковые'},
{text: 'У тебя неземные, бездонные, красивые, завораживающие и вдохновляющие глаза'},
{text: 'Ты даришь окружающим добро и улыбки'},
{text: 'Ты будешь не против позавтракать моими детьми'},
{text: 'Мне нравится, как пахнут твои волосы'},
{text: 'Я не хочу тебя никому отдавать'},
{text: 'Я ревную тебя к твоему (моему) коту и не только'},
{text: 'Тебе не нравится, когда я без шапки зимой'},
{text: 'Я хочу, что бы когда ты уставала, ты спала на моем плече'},
{text: 'Ты доверяешь мне самые сокровенные секреты'},
{text: 'Ты умеешь видеть красоту в обычных вещах'},
{text: 'Благодаря тебе, я могу взглянуть на мир иначе'},
{text: 'С тех пор, как мы познакомились я думаю только о тебе'},
{text: 'Я грущу, когда ты уходишь'},
{text: 'Ты хочешь украсть мои трусы'},
{text: 'Мне нравятся твои ножки'},
{text: 'Я люблю целовать каждый твой пальчик'},
{text: 'Мне хочется мурлыкать для тебя'},
{text: 'Ты читаешь мои мысли'},
{text: 'Иногда я неспециально обижаю тебя, и ты мне это прощаешь'},
{text: 'Я люблю тебя с макияжем, но без него ты красивее'},
{text: 'Я хочу ходить с тобой по городу, держа тебя за руку'},
{text: 'Я отдам тебе куртку, когда тебе холодно'},
{text: 'Мы с тобой очень разные'},
{text: 'Мы с тобой очень похожи'},
{text: 'Без меня ты не можешь починить кран и закрутить шуруп'},
{text: 'Ты очень переживаешь, если я увидел тебя в домашней одежде и без макияжа'},
{text: 'Тараканы в моей голове проголосовали за тебя'},
{text: 'Я хочу засыпать, обнимая тебя'},
{text: 'Я хочу просыпаться рядом с тобой'},
{text: 'Ещё ни один поэт не написал стихов о такой любви, как у нас с тобой'}
];
var sales_div = document.getElementById("reason");
function randomArrayInner(){
  let rand = Math.floor(Math.random() * phrases.length);
reason.innerHTML = '<input type="button" value="Еще причина :3 " onclick="randomArrayInner()"/><a> '+phrases[rand].text+'</a>';
}
