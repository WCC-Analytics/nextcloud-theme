<?php
$post_id = get_the_ID();
$title = get_the_title();
$post_excerpt = get_the_excerpt();
$link = get_permalink();
$featured_image = get_the_post_thumbnail($post_id, 'large', array( 'class' => 'feat_img' ));
$date = (string)get_the_date('F d, Y');

if ( 'event' == get_post_type() ) {
	
	/*$cat = get_terms( array(
		'taxonomy' => 'event_categories'
	) );
	*/
	$cat = wp_get_object_terms( $post_id, 'event_categories', array() );

} else {
	$cat = get_the_category($post_id);
}

$cats = '';
if($cat) {
	foreach ($cat as $c) {
		if($c->term_id != 243) { // exclude Uncategorized
			$category_link = get_category_link($c->term_id);
			$cats .= '<a href="'.$category_link.'">' . $c->name . ' </a>';
		}
	}
}

					echo '<div class="col-lg-4 col-md-6 spacer news-container news-item" style="">';
					echo '<div class="post-box">';
					echo '<div class="post-img" style=""><a href="'.$link.'" title="'.$title.'">'.$featured_image.'</a></div>';
					echo '<div class="post-body">';
					echo '<ul class="post-meta"><li class="date"><i class="far fa-calendar-alt"></i>'.$date.'</li><li class="categories"><i class="far fa-folder-open"></i>'.$cats.'</li></ul>';
					echo '<h4><a href="'.$link.'" title="'.$title.'">' . $title . '</a></h4>';
					echo '<p>' . $post_excerpt . '</p>';
					echo '<a class="c-btn" href="' . $link . '">'.__('Read More', 'nextcloud').'<i class="fas fa-angle-right"></i></a>';
					echo '</div>';
					echo '</div>';
					echo '</div>';