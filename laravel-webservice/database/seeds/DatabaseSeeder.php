<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Oferta;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        if(User::where('email','=','admin@mail.com')->count()){
            $user = User::where('email','=','admin@mail.com')->first();
        }else{
            $user = new User;
        }

        $user->name = 'admin';
        $user->email = 'admin@mail.com';
        $user->password = bcrypt("123456");
        $user->save();


        //Oferta
        $oferta = [
            'titulo' => 'Arroz',
            'descricao' => 'descricao',
            'validade' => '2017-12-23',
            'valor' => 5.90,
            'valor_f' => 'R$ 5,90'
        ];

        Oferta::create($oferta);

    }
}
