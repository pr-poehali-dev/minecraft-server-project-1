import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src="/img/2f762bff-a9fb-414d-a4c4-971f754fc6a6.jpg"
                  alt="Kasamuihi"
                />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Kasamuihi</h1>
                <p className="text-sm text-gray-600">Стримлю с душой ❤️</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-500 text-white animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                LIVE
              </Badge>
              <Button className="bg-warm-purple hover:bg-warm-purple/90 text-white">
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Смотреть
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                Привет, я <span className="text-warm-blue">Kasamuihi</span>!
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Добро пожаловать в уютное место, где каждый стрим — это новое
                приключение! Играем, общаемся, создаем крутые моменты вместе.
                Присоединяйся к нашему дружному комьюнити!
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-warm-pink text-white px-4 py-2">
                  🎮 Игры
                </Badge>
                <Badge className="bg-warm-teal text-white px-4 py-2">
                  💬 Общение
                </Badge>
                <Badge className="bg-warm-orange text-white px-4 py-2">
                  😄 Позитив
                </Badge>
                <Badge className="bg-warm-purple text-white px-4 py-2">
                  🎉 Веселье
                </Badge>
              </div>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-warm-blue hover:bg-warm-blue/90 text-white"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть стрим
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-warm-pink text-warm-pink hover:bg-warm-pink/10"
                >
                  <Icon name="Heart" size={20} className="mr-2" />
                  Подписаться
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/img/6b38a81b-74d6-4b39-b63e-f8e3249aa04d.jpg"
                  alt="Стримерская"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-warm-pink rounded-full flex items-center justify-center shadow-lg">
                <Icon name="Heart" size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Наше комьюнити
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-warm-blue mb-2">
                  12.5K
                </div>
                <div className="text-sm text-gray-600">Подписчиков</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-warm-pink mb-2">
                  2.8K
                </div>
                <div className="text-sm text-gray-600">Средний онлайн</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-warm-teal mb-2">
                  450+
                </div>
                <div className="text-sm text-gray-600">Часов стрима</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-warm-orange mb-2">
                  1.2K
                </div>
                <div className="text-sm text-gray-600">Discord участников</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Расписание стримов
          </h3>
          <div className="grid md:grid-cols-7 gap-4">
            {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => (
              <Card
                key={day}
                className={`text-center ${index === 2 ? "ring-2 ring-warm-blue" : ""}`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  {index === 2 ? (
                    <div className="space-y-2">
                      <Badge className="bg-warm-blue text-white text-xs">
                        Сегодня
                      </Badge>
                      <div className="text-sm font-medium">19:00</div>
                      <div className="text-xs text-gray-500">Minecraft</div>
                    </div>
                  ) : index === 1 || index === 3 || index === 5 ? (
                    <div className="space-y-2">
                      <div className="text-sm font-medium">20:00</div>
                      <div className="text-xs text-gray-500">Игры</div>
                    </div>
                  ) : index === 6 ? (
                    <div className="space-y-2">
                      <div className="text-sm font-medium">15:00</div>
                      <div className="text-xs text-gray-500">Общение</div>
                    </div>
                  ) : (
                    <div className="text-xs text-gray-400">Выходной</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Время может изменяться — следи за анонсами в Discord и социальных
              сетях!
            </p>
            <Button
              variant="outline"
              className="border-warm-blue text-warm-blue hover:bg-warm-blue/10"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              Добавить в календарь
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-warm-pink/10 to-warm-purple/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Поддержать стрим
            </h3>
            <p className="text-lg text-gray-600">
              Каждый донат помогает развивать канал и делать стримы еще лучше!
              ❤️
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-warm-pink/20 hover:border-warm-pink transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-warm-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Coffee" size={24} className="text-warm-pink" />
                </div>
                <CardTitle className="text-warm-pink">Кофе</CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-800">
                  100₽
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Поддержка энергии для стримов
                </p>
                <Button className="w-full bg-warm-pink hover:bg-warm-pink/90 text-white">
                  Купить кофе
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-warm-blue/20 hover:border-warm-blue transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-warm-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Pizza" size={24} className="text-warm-blue" />
                </div>
                <CardTitle className="text-warm-blue">Обед</CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-800">
                  500₽
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Вкусная еда для долгих стримов
                </p>
                <Button className="w-full bg-warm-blue hover:bg-warm-blue/90 text-white">
                  Накормить
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-warm-purple/20 hover:border-warm-purple transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-warm-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Gamepad2"
                    size={24}
                    className="text-warm-purple"
                  />
                </div>
                <CardTitle className="text-warm-purple">Игра</CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-800">
                  1000₽
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Новые игры для стримов
                </p>
                <Button className="w-full bg-warm-purple hover:bg-warm-purple/90 text-white">
                  Подарить
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/70 rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Последние доноты ❤️
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Аноним</span>
                <span className="text-sm font-medium text-warm-pink">100₽</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Игрок123</span>
                <span className="text-sm font-medium text-warm-blue">500₽</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Фан❤️</span>
                <span className="text-sm font-medium text-warm-purple">
                  250₽
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Discord Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Присоединяйся к комьюнити
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Discord */}
            <Card className="border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="MessageCircle"
                    size={32}
                    className="text-indigo-600"
                  />
                </div>
                <CardTitle className="text-indigo-600">
                  Discord сервер
                </CardTitle>
                <CardDescription>
                  Основное место общения нашего комьюнити
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Участников:</span>
                  <Badge className="bg-indigo-100 text-indigo-800">1,247</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Онлайн:</span>
                  <Badge className="bg-green-100 text-green-800">324</Badge>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Присоединиться
                </Button>
              </CardContent>
            </Card>

            {/* Social Networks */}
            <Card className="border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Share2" size={32} className="text-pink-600" />
                </div>
                <CardTitle className="text-pink-600">Социальные сети</CardTitle>
                <CardDescription>Следи за новостями и анонсами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  <Icon name="Twitch" size={16} className="mr-2" />
                  Twitch
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-200 text-red-600 hover:bg-red-50"
                >
                  <Icon name="Youtube" size={16} className="mr-2" />
                  YouTube
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Telegram
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Avatar className="w-16 h-16 mr-4">
                <AvatarImage
                  src="/img/2f762bff-a9fb-414d-a4c4-971f754fc6a6.jpg"
                  alt="Kasamuihi"
                />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <div>
                <h5 className="text-2xl font-bold mb-2">Kasamuihi</h5>
                <p className="text-gray-400">Стримлю с душой для вас ❤️</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Twitch" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Icon name="Youtube" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Icon name="Send" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Icon name="MessageCircle" size={24} />
              </a>
            </div>

            <Separator className="my-6 bg-gray-700" />

            <p className="text-gray-400 text-sm">
              © 2024 Kasamuihi. Создано с ❤️ для лучшего комьюнити
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
