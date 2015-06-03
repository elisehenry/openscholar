<?php

class MediaGalleryNodeRestfulBase extends OsNodeRestfulBase {

  /**
   * @api {get} api/media_gallery/:id Get
   * @apiVersion 0.1.0
   * @apiName Get
   * @apiGroup Media gallery
   *
   * @apiDescription Consume media_gallery content.
   *
   * @apiParam {Number} id The media gallery ID
   */
  public function publicFieldsInfo() {
    $public_fields = parent::publicFieldsInfo();

    // Body field Isn't attached.
    unset($public_fields['body']);

    $public_fields['columns'] = array(
      'property' => 'media_gallery_columns',
    );

    $public_fields['rows'] = array(
      'property' => 'media_gallery_rows',
    );

    $public_fields['files'] = array(
      'property' => 'media_gallery_file',
    );

    return $public_fields;
  }

  /**
   * @api {post} api/media_gallery Post
   * @apiVersion 0.1.0
   * @apiName Post
   * @apiGroup Media gallery
   *
   * @apiDescription Create a Media gallery entry.
   *
   * @apiParam {Number} id The media gallery ID
   *
   * @apiSampleRequest off
   */
  public function createEntity() {
    return parent::createEntity();
  }

  /**
   * @api {delete} api/media_gallery/:id Delete
   * @apiVersion 0.1.0
   * @apiName Delete
   * @apiGroup Media gallery
   *
   * @apiDescription Create a Media gallery entry.
   *
   * @apiParam {Number} id The media gallery ID
   *
   * @apiSampleRequest off
   */
  public function deleteEntity($entity_id) {
    parent::deleteEntity($entity_id);
  }

  /**
   * @api {patch} api/media_gallery/:id Patch
   * @apiVersion 0.1.0
   * @apiName Patch
   * @apiGroup Media gallery
   *
   * @apiDescription Create a Media gallery entry.
   *
   * @apiParam {Number} id The media gallery ID
   *
   * @apiSampleRequest off
   */
  public function patchEntity($entity_id) {
    parent::patchEntity($entity_id);
  }

}