<?php
// This file is generated. Do not modify it manually.
return array(
	'alert-box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'u-plus/alert-box',
		'version' => '0.1.0',
		'title' => 'Alert Box',
		'category' => 'widgets',
		'description' => 'Adds an alert box to output important information to the reader.',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.alert-box-content div'
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'admin-site'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => '#4F46E5'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#fff'
			)
		),
		'textdomain' => 'alert-box',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'align' => true
		),
		'styles' => array(
			array(
				'name' => 'regular',
				'label' => 'Regular',
				'isDefault' => true
			),
			array(
				'name' => 'accented',
				'label' => 'Accented'
			)
		)
	)
);
