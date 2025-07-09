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
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      {/* Header */}
      <header className="bg-primary text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Icon name="Sword" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">KASAMUIHI SERVER</h1>
              <p className="text-sm opacity-90">Майнкрафт сервер от стримера</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-green-600 text-white">
              <Icon name="Users" size={14} className="mr-1" />
              Онлайн: 47/100
            </Badge>
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-primary border-white hover:bg-green-50"
            >
              Подключиться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <img
              src="/img/4c836475-90e8-4b8e-b634-fd1d2d10f9d1.jpg"
              alt="Minecraft сервер"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
            />
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Добро пожаловать на сервер
            <span className="text-primary"> KASAMUIHI</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Выживание онлайн с друзьями от популярного стримера! Создавай,
            исследуй и выживай в захватывающем мире Minecraft.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-green-600 text-white px-4 py-2">
              Выживание
            </Badge>
            <Badge className="bg-blue-600 text-white px-4 py-2">
              Экономика
            </Badge>
            <Badge className="bg-purple-600 text-white px-4 py-2">
              Стрим интеграция
            </Badge>
            <Badge className="bg-orange-600 text-white px-4 py-2">
              Активное комьюнити
            </Badge>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Играть сейчас
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
            >
              <Icon name="Heart" size={20} className="mr-2" />
              Поддержать
            </Button>
          </div>
        </div>
      </section>

      {/* Server Info */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            О сервере
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-green-600" />
                </div>
                <CardTitle className="text-green-600">
                  Активное комьюнити
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Более 1000 зарегистрированных игроков. Дружелюбное сообщество
                  с активной поддержкой новичков.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">
                  Стабильная работа
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Сервер работает 24/7 без лагов. Регулярные обновления и
                  быстрая техническая поддержка.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Twitch" size={32} className="text-purple-600" />
                </div>
                <CardTitle className="text-purple-600">
                  Стрим интеграция
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Играй вместе с Kasamuihi во время стримов. Участвуй в событиях
                  и конкурсах на канале.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <img
              src="/img/35188595-0a43-4f58-8c2b-7cb9ec088fa4.jpg"
              alt="Донат"
              className="w-32 h-32 mx-auto mb-6 rounded-lg shadow-lg"
            />
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Поддержи сервер
            </h3>
            <p className="text-lg text-gray-600">
              Помоги развивать сервер и получи эксклюзивные возможности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-green-600">Базовый</CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-800">
                  299₽
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-600 mr-2"
                  />
                  <span className="text-sm">Префикс [VIP]</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-600 mr-2"
                  />
                  <span className="text-sm">Дополнительные слоты</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-600 mr-2"
                  />
                  <span className="text-sm">Приват территории</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-blue-600">Премиум</CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-800">
                  599₽
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                  <span className="text-sm">Все из базового</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                  <span className="text-sm">Эксклюзивные предметы</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                  <span className="text-sm">Доступ к /fly</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-purple-600">Легендарный</CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-800">
                  999₽
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-purple-600 mr-2"
                  />
                  <span className="text-sm">Все из премиум</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-purple-600 mr-2"
                  />
                  <span className="text-sm">Личная территория</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-purple-600 mr-2"
                  />
                  <span className="text-sm">Участие в стримах</span>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Правила сервера
          </h3>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Icon name="AlertTriangle" size={20} className="mr-2" />
                  Запрещено
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <Icon name="X" size={16} className="text-red-500 mr-2 mt-1" />
                  <span>Использование читов, багов и эксплойтов</span>
                </div>
                <div className="flex items-start">
                  <Icon name="X" size={16} className="text-red-500 mr-2 mt-1" />
                  <span>Грифинг чужих построек без разрешения</span>
                </div>
                <div className="flex items-start">
                  <Icon name="X" size={16} className="text-red-500 mr-2 mt-1" />
                  <span>Оскорбления и токсичное поведение</span>
                </div>
                <div className="flex items-start">
                  <Icon name="X" size={16} className="text-red-500 mr-2 mt-1" />
                  <span>Спам в чате и реклама других серверов</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Icon name="CheckCircle" size={20} className="mr-2" />
                  Рекомендуется
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2 mt-1"
                  />
                  <span>Помогать новичкам и быть дружелюбным</span>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2 mt-1"
                  />
                  <span>Участвовать в событиях и конкурсах</span>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2 mt-1"
                  />
                  <span>Строить красивые и оригинальные постройки</span>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2 mt-1"
                  />
                  <span>Следить за стримами Kasamuihi</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Контакты
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Icon name="Twitch" size={20} className="mr-2" />
                  Стрим
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Следи за стримами и участвуй в интерактивных событиях на
                  сервере
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Перейти на канал
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Нужна помощь? Администрация всегда готова помочь с любыми
                  вопросами
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Написать в поддержку
                </Button>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8" />

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Подключение к серверу
            </h4>
            <div className="bg-gray-100 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-gray-600 mb-2">IP адрес сервера:</p>
              <p className="text-lg font-mono font-bold text-primary">
                kasamuihi.minecraft.ru
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h5 className="text-xl font-bold mb-2">KASAMUIHI SERVER</h5>
            <p className="text-gray-400">
              Лучший сервер для выживания в Minecraft
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Twitch" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Youtube" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Kasamuihi Server. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
