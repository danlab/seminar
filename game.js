var step = 0;
var score = 0;
var flag = false;
var a = document.getElementById( "bgm" );
var q = [
	"次の方、どうぞ！",
	"さぁ、これからゼミの選考面接を始めます。",
	"今日のために何か準備してきましたか？",
	"（未定義）",
	"では、問題です。<br>情報技術の略は何？",
	"（未定義）",
	"次のうち、プログラミング言語はどれ？",
	"（未定義）",
	"インターネットのプロトコルは何？",
	"（未定義）",
];
function scoreUp( x ){
	score += x;
	$( "nav" ).slideUp( 0 );
	$( "#message" ).bind( "click", process );
	$( "#message p#main" ).html( q[step++] );
	flag = true;
}
var process = function() {
	flag = false;
	do{
		$( "#message p#main" ).html( q[step++] );
		if( step == 1 ){
			$( "#student" ).show( 2000 );
		}
		else if( step == 3 ){
			$( "#message" ).unbind();
			$( "#a1 a" ).html( "はい！" );
			$( "#a1 a" ).unbind();
			$( "#a1 a" ).click( function(){ q[3] = "素晴らしい！"; scoreUp( 10 ) } );
			$( "#a2 a" ).unbind();
			$( "#a2 a" ).html( "いいえ。" );
			$( "#a2 a" ).click( function(){ q[3] = "そうですか…"; scoreUp( 10 ) } );
			$( "#a3 a" ).unbind();
			$( "#a3 a" ).html( "えっ？" );
			$( "#a3 a" ).click( function(){ q[3] = "大丈夫かな～"; scoreUp( 10 ) } );
			$( "nav" ).slideDown( "slow" );
		}
		else if( step == 5 ){
			$( "#message" ).unbind();
			$( "#a1 a" ).unbind();
			$( "#a1 a" ).html( "ＩＴ" );
			$( "#a1 a" ).click( function(){ q[5] = "正解です。"; scoreUp( 20 ) } );
			$( "#a2 a" ).unbind();
			$( "#a2 a" ).html( "ＳＥ" );
			$( "#a2 a" ).click( function(){ q[5] = "システムエンジニアのことだよ。"; scoreUp(  0 ) } );
			$( "#a3 a" ).unbind();
			$( "#a3 a" ).html( "ＰＧ" );
			$( "#a3 a" ).click( function(){ q[5] = "プログラマのことだよ。"; scoreUp(  0 ) } );
			$( "nav" ).slideDown( "slow" );
		}
		else if( step == 7 ){
			$( "#message" ).unbind();
			$( "#a1 a" ).unbind();
			$( "#a1 a" ).html( "英語" );
			$( "#a1 a" ).click( function(){ q[7] = "しっかり勉強しましょう。"; scoreUp(  0 ) } );
			$( "#a2 a" ).unbind();
			$( "#a2 a" ).html( "ドイツ語" );
			$( "#a2 a" ).click( function(){ q[7] = "ソーセージは最高だよ♪"; scoreUp(  0 ) } );
			$( "#a3 a" ).unbind();
			$( "#a3 a" ).html( "C言語" );
			$( "#a3 a" ).click( function(){ q[7] = "よくできました！"; scoreUp( 20 ) } );
			$( "nav" ).slideDown( "slow" );
		}
		else if( step == 9 ){
			$( "#message" ).unbind();
			$( "#a1 a" ).unbind();
			$( "#a1 a" ).html( "ＳＭＴＰ" );
			$( "#a1 a" ).click( function(){ q[9] = "メール送信のプロトコル。"; scoreUp(  0 ) } );
			$( "#a2 a" ).unbind();
			$( "#a2 a" ).html( "ＴＣＰ／ＩＰ" );
			$( "#a2 a" ).click( function(){ q[9] = "お見事！"; scoreUp( 20 ) } );
			$( "#a3 a" ).unbind();
			$( "#a3 a" ).html( "ＦＴＰ" );
			$( "#a3 a" ).click( function(){ q[9] = "ファイル転送のプロトコル。"; scoreUp(  0 ) } );
			$( "nav" ).slideDown( "slow" );
		}
		else if( step >= q.length + 1 ){
			$( "nav" ).fadeOut( "slow" );
			$( "#message" ).fadeOut( "slow" );
			$( "h1" ).slideDown( "fast" );
			$( "#dan" ).animate( {
				left: 500,
				opacity: 0
			}, 500 );
			$( "#student" ).animate( {
				width: 768
			}, 500 );
			if( score >= 50 ){
				$( "h1" ).html( "あなたは合格です！" );
				$( "#student" ).animate( {
					opacity: 1
				}, 1000 );
			}
			else{
				$( "h1" ).html( "残念ながら不合格…" );
				$( "#student" ).animate( {
					opacity: 0
				}, 1000 );
			}
			a.pause();
		}
		else{
			$( "#student" ).finish();
		}
	}while( flag );
}
$( "h1" ).click( function() {
	$( "h1" ).slideUp( "slow" );
	$( "#dan" ).css({
		"visibility": "visible"
	});
	$( "#message" ).slideDown( "slow" );
	$( "#message" ).bind( "click", process );
	$( "h1" ).unbind();
	a.play();
});
