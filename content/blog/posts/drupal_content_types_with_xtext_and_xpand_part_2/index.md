---
title: 'Generating Drupal content types with Xtext and Xpand, part 2'
date: '2009-11-03T19:55:47.000Z'
summaryMarkdown: '[Yesterday](/posts/drupal_content_types_with_xtext_and_xpand_part_1/) I wrote about my first draft version of a PHP code generator for custom Drupal content types written with Xtext and Xpand. Today I added some more features to the generator.'
tags:
  - Drupal
  - MDA
  - PHP
  - xtext
  - Softwareentwicklung
---

I made some minor enhancements to the DSLs grammar: now a `string` and a `text` field type are available. While the first is a length-limited field that is mapped to a `varchar` column in the database and a `textfield` in the nodes edit form, the text field is mapped to `text` field in the database and a `textarea` in the nodes edit form (Input format filters are not supported yet).

More important is the generation of the edit form, that works now (at least at a very basic level). For example have a look at the form that allows the creation of the Article content type:

![Generated Editor for a content type](/uploads/create-article.png)

Saving and loading of new nodes to the database also works as the `hook_install()`, `hook_uninstall()` and `hook_schema()`-method implementations are generated now. The following code shows the schema definition for the Artice content type:

```php
<?php
// -------------------------------------------------------------------------
// ---            AUTOMATICALLY GENERATED. DO NOT EDIT !                 ---
// -------------------------------------------------------------------------
/**
 * Defines the database schema for the
 * Article content type
 */
function news_article_schema() {
  return array (
    'fields' => array(
      'vid' => array(
        'type' => 'int',
        'unsigned' => TRUE,
        'not null' => TRUE,
        'default' => 0
      ),
      'nid' => array(
        'type' => 'int',
        'unsigned' => TRUE,
        'not null' => TRUE,
        'default' => 0
      ),
      'abstract' => array(
        'type' => 'text',
        'not null' => TRUE,
      ),
      'subtitle' => array(
        'type' => 'varchar',
        'not null' => FALSE,
        'length' => 300
      ),
      'writer' => array(
        'type' => 'varchar',
        'not null' => FALSE,
        'length' => 50
      ),
      'date' => array(
        'type' => 'datetime',
        'not null' => TRUE,
      ),
      'topic' => array(
        'type' => 'varchar',
        'not null' => TRUE,
        'length' => 8
      )
    ),
    'indexes' => array(
      'nid' => array('nid')
    ),
    'primary key' => array('vid')
  );
}
?>
```

In addition the `.module` and `.install` files are generated.

For a "complete" Drupal module only the `.info` file is missing now.
